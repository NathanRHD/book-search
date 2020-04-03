import * as React from "react";
import * as _ from "underscore";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";
import { Book } from "../../../data/books";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = props => {
  const searchResults = React.useMemo(
    () => _.values(Book.repository).map(book => <Card.Component {...book} />),
    []
  );

  return (
    <div className="home">
      <Helmet>
        <title>Nathan's Books</title>
      </Helmet>

      <div className="header">
        <h1>Nathan's Books</h1>
        <div className="search-box">
          <input type="text" placeholder="Search titles here..." />
        </div>
      </div>
      <div className="main">
        <div className="search-results">{searchResults}</div>
        <LoadingSpinner />
        {props.children}
      </div>
    </div>
  );
};
