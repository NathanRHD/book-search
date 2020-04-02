import * as React from "react";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card, Status } from "../card";
import Helmet from "react-helmet";
import { RouteComponentProps } from "react-router";

type HomeProps = {} & RouteComponentProps<{}, {}>;

export const Home: React.FC<HomeProps> = props => {
  const leninCard = {
    title: "The State and Revolution",
    author: "V.I. Lenin",
    statuses: [Status.Unread, Status.Reading]
  };
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
        <div className="search-results">
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
          <Card.Component {...leninCard} />
        </div>
        <LoadingSpinner />
        {props.children}
      </div>
    </div>
  );
};
