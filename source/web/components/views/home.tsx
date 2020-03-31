import * as React from "react";

import "./home.scss";

import { LoadingSpinner } from "../loading-spinner";

export const Home = () => (
  <div className="home">
    <div className="header">
      <h1>Book Search</h1>
      <div className="search-box">
        <input type="text" placeholder="Search titles here..." />
      </div>
    </div>
    <div className="main">
      <LoadingSpinner />
    </div>
  </div>
);
