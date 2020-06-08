import * as express from "express";
import { endpoints } from "./endpoints";
import * as _ from "underscore";

import * as controllers from "./controllers/.";

console.log("CONTROLLERS", controllers);

export const apiRouter = express.Router();
_.keys(endpoints).forEach((key) => {
  // @todo make work with other verbs
  apiRouter[endpoints[key].method === "GET" ? "get" : "post"](
    key,
    endpoints[key].controller
  );
});
