import * as React from "react";
import * as _ from "underscore";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";
import { useFetch, apiSdk } from "../../api-sdk/sdk";
import { Models } from "../../api-sdk/models";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { isPending, response, fetch } = useFetch<Models.Book.Entity[]>(
    apiSdk["/books"]
  );

  const [cursor, setCursor] = React.useState(undefined);
  const [direction, setDirection] = React.useState("forward");

  const pageSize = 3;

  React.useEffect(() => {
    const body = {
      paginationOptions: {
        direction,
        pageSize,
        cursor,
      },
      searchTerm,
    };
    fetch(undefined, body);
  }, [searchTerm]);

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="main">
        {!isPending && response && (
          <div className="search-results">
            {response.map((book) => (
              <Card.Component {...book} key={book.id} />
            ))}
          </div>
        )}
        {isPending && <LoadingSpinner />}
        {props.children}
      </div>
    </div>
  );
};
