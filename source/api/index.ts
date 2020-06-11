import * as express from "express";
import * as _ from "underscore";
import { createConnection, ConnectionOptions } from "typeorm";
import * as PostgressConnectionStringParser from "pg-connection-string";

import "reflect-metadata";

import { endpoints } from "./endpoints";
import * as controllers from "./controllers";

console.log("CONTROLLERS", controllers);

export const apiRouter = express.Router();

const getConnectionOptions = (): ConnectionOptions => {
  switch (process.env.ENV_NAME) {
    case "dev": {
      return {
        type: "postgres",
        database: "nathans-books",
        host: "localhost",
        port: 5432,
        username: "nathanrussell",
        entities: [],
      };
    }
    default: {
      const connectionOptions = PostgressConnectionStringParser.parse(
        process.env.DATABASE_URL
      );

      return {
        type: "postgres",
        database: connectionOptions.database,
        host: connectionOptions.host,
        port: Number(connectionOptions.port) || 5432,
        username: connectionOptions.user,
        password: connectionOptions.password,
        entities: [],
      };
    }
  }
};

const init = async () => {
  try {
    const connection = await createConnection(getConnectionOptions());
    await connection.synchronize();

    console.log("DB CONNECTION", connection);

    _.keys(endpoints).forEach((key) => {
      // @todo make work with other verbs
      apiRouter[endpoints[key].method === "GET" ? "get" : "post"](
        key,
        endpoints[key].controller
      );
    });
  } catch (error) {
    console.log(error);
  }
};

init();
