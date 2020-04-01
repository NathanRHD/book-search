import * as React from "react";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";
import { Card } from "../card";

export const Home = () => {
  const leninCard = {
    title: "The State and Revolution",
    author: "V.I. Lenin"
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
        <Card.Component {...leninCard} />
        <LoadingSpinner />
      </div>
    </div>
  );
};
