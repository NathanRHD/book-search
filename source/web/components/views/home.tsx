import * as React from "react";
import * as _ from "underscore";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";
import { useFetch, apiSdk } from "../../api-sdk/sdk";
import { Endpoints } from "../../api-sdk/typings";
import { useThrottle } from "../../helpers/async-hooks";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = (props) => {
  const { isPending, response, fetch } = useFetch<
    Endpoints.Book.GetMany.Response
  >(apiSdk["/books/search"]);

  const cursor = React.useRef<number>(undefined);
  const direction = React.useRef<"forward" | "backward">("forward");

  const pageSize = 9;

  const fetchWithOptions = React.useCallback(
    async (searchTerm: string, ms?: number) => {
      const body = {
        paginationOptions: {
          direction: direction.current,
          pageSize,
          cursor: cursor.current,
        },
        searchTerm,
      };

      await fetch(undefined, body, ms);

      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  React.useEffect(() => {
    fetchWithOptions(undefined, 1000);
  }, []);

  const { value: searchTerm, onChange: onThrottleChange } = useThrottle(
    (searchTerm) => fetchWithOptions(searchTerm, 500),
    1000
  );

  const onSearchTermChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      cursor.current = undefined;
      direction.current = "forward";

      onThrottleChange(e);
    },
    [onThrottleChange]
  );

  const goForward = React.useCallback(() => {
    direction.current = "forward";
    cursor.current = response.books[response.books.length - 1].id;

    fetchWithOptions(searchTerm, 500);
  }, [response, searchTerm]);

  const goBack = React.useCallback(() => {
    direction.current = "backward";
    cursor.current = response.books[0].id;

    fetchWithOptions(searchTerm, 500);
  }, [response, searchTerm]);

  return (
    <div className="home">
      <Helmet
        defaultTitle="Nathan's Books"
        titleTemplate="Nathan's Books | %s"
      />

      <div className="header">
        <h1>Nathan's Books</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search titles here..."
            value={searchTerm}
            onChange={onSearchTermChange}
          />
        </div>
      </div>
      <div className="main">
        {response && (
          <>
            <div className="search-results">
              {response.books.map((book) => (
                <Card.Component {...book} key={book.id} />
              ))}
            </div>
            <div className="pagination-controls">
              <button
                className="secondary"
                onClick={goBack}
                disabled={isPending || response.firstPage}
              >
                Back
              </button>
              <LoadingSpinner inline loading={isPending} />
              <button
                className="secondary"
                onClick={goForward}
                disabled={isPending || response.finalPage}
              >
                Forward
              </button>
            </div>
          </>
        )}
        {isPending && !response && <LoadingSpinner loading />}
        {props.children}
      </div>
    </div>
  );
};
