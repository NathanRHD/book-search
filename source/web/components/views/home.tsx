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
  const { isPending, response, fetch } = useFetch<Models.Book.Entity[]>(
    apiSdk["/books"]
  );

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

  const { value: searchTerm, onChange: onSearchTermChange } = useThrottle(
    fetchWithOptions,
    1000
  );

  const goForward = React.useCallback(() => {
    direction.current = "forward";
    cursor.current = response[response.length - 1].id;

    fetchWithOptions(searchTerm);
  }, [response, searchTerm, fetchWithOptions]);

  const goBack = React.useCallback(() => {
    direction.current = "backward";
    cursor.current = response[0].id;

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
        {!isPending && response && (
          <>
            <div className="search-results">
              {response.map((book) => (
                <Card.Component {...book} key={book.id} />
              ))}
            </div>
            <button onClick={goBack}>Back</button>
            <button onClick={goForward}>Forward</button>
          </>
        )}
        {isPending && <LoadingSpinner />}
        {props.children}
      </div>
    </div>
  );
};
