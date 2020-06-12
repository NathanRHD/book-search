import * as React from "react";
import * as _ from "underscore";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";
import { useFetch, apiSdk } from "../../api-sdk/sdk";
import { Models } from "../../api-sdk/models";
import { useThrottle } from "../../helpers/async-hooks";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = (props) => {
  const { isPending, response, fetch } = useFetch<{
    books: Models.Book.Entity[];
    firstPage: boolean;
    finalPage: boolean;
  }>(apiSdk["/books/search"]);

  const cursor = React.useRef<number>(undefined);
  const direction = React.useRef<"forward" | "backward">("forward");

  const pageSize = 3;

  const fetchWithOptions = React.useCallback(
    (searchTerm: string) => {
      const body = {
        paginationOptions: {
          direction: direction.current,
          pageSize,
          cursor: cursor.current,
        },
        searchTerm,
      };
      fetch(undefined, body);
    },
    [pageSize, fetch]
  );

  React.useEffect(() => {
    fetchWithOptions(undefined);
  }, [fetchWithOptions]);

  const { value: searchTerm, onChange: onSearchTermChange } = useThrottle(
    fetchWithOptions,
    1000
  );

  const goForward = React.useCallback(() => {
    direction.current = "forward";
    cursor.current = response.books[response.books.length - 1].id;

    fetchWithOptions(searchTerm);
  }, [response, searchTerm, fetchWithOptions]);

  const goBack = React.useCallback(() => {
    direction.current = "backward";
    cursor.current = response.books[0].id;

    fetchWithOptions(searchTerm);
  }, [response, searchTerm, fetchWithOptions]);

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
