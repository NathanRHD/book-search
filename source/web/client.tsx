import * as React from "react";

import { routeComponents } from "./routes";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";

import "./theme/main.scss";

const initClient = () => {
  const ClientApp = <Router history={browserHistory}>{routeComponents}</Router>;

  render(ClientApp, document.getElementById("root"));
};

if (typeof window !== "undefined") {
  initClient();
}
