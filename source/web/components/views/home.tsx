import * as React from "react";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card, Status } from "../card";

export const Home = () => {
  const leninCard: Card.Props = {
    title: "The State and Revolution",
    author: "V.I. Lenin",
    statuses: [Status.Unread, Status.Reading]
  };
  return (
    <div className="home">
      <div className="header">
        <h1>Book Search</h1>
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
      </div>
    </div>
  );
};
