import * as express from "express";
import { endpoints } from "./endpoints";
import * as _ from "underscore";

import * as controllers from "./controllers/.";

console.log("CONTROLLERS", controllers);

export const apiRouter = express.Router();
_.keys(endpoints).forEach((key) => {
  apiRouter.use(key, endpoints[key].controller);
});
