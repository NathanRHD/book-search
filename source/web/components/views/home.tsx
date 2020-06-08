import * as React from "react";
import * as _ from "underscore";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = (props) => {
  // const searchResults = React.useMemo(
  //   () => _.values(Book.repository).map((book) => <Card.Component {...book} />),
  //   []
  // );

  return (
    <div className="home">
      <Helmet
        defaultTitle="Nathan's Books"
        titleTemplate="Nathan's Books | %s"
      />

      <div className="header">
        <h1>Nathan's Books</h1>
        <div className="search-box">
          <input type="text" placeholder="Search titles here..." />
        </div>
      </div>
      <div className="main">
        {/* <div className="search-results">{searchResults}</div> */}
        <LoadingSpinner />
        {props.children}
      </div>
    </div>
  );
};
