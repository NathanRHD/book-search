import { Express } from "express";
import * as express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import { routeComponents } from "./routes";
import { RouterContext, match, createRoutes } from "react-router";

export const clientRouter = express.Router();

clientRouter.use(express.static("static"));

clientRouter.use((req, res, next) => {
  match(
    {
      routes: createRoutes(routeComponents),
      location: req.url,
    },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const ServerApp = () => <RouterContext {...renderProps} />;

        const content = `<html>
<head>
    <title>Nathan's Books</title>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link rel="stylesheet" href="/styling/main.css">

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="root">
        ${ReactDOMServer.renderToString(React.createElement(ServerApp))}
    </div>
    <script src="/scripts/bundle.js"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver,IntersectionObserverEntry,fetch,Promise"></script>
</body>
</html>`;

        res.status(200).send(content);
      } else {
        next();
      }
    }
  );
});
