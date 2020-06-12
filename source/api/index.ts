import * as express from "express";
import * as _ from "underscore";
import { createConnection } from "typeorm";
import * as PostgressConnectionStringParser from "pg-connection-string";

import "reflect-metadata";

import { endpoints } from "./endpoints";
import * as controllers from "./controllers";
import { Book } from "./book/entity";
import { Status } from "./status/entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

console.log("CONTROLLERS", controllers);

export const apiRouter = express.Router();

const getConnectionOptions = (): Omit<
  PostgresConnectionOptions,
  "type" | "entities"
> => {
  switch (process.env.ENV_NAME) {
    case "dev": {
      return {
        database: "nathans-books",
        host: "localhost",
        port: 5432,
        username: "nathanrussell",
      };
    }
    default: {
      const connectionOptions = PostgressConnectionStringParser.parse(
        process.env.DATABASE_URL
      );

      return {
        database: connectionOptions.database,
        host: connectionOptions.host,
        port: Number(connectionOptions.port) || 5432,
        username: connectionOptions.user,
        password: connectionOptions.password,
      };
    }
  }
};

const init = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      entities: [Book, Status],
      ...getConnectionOptions(),
    });
    if (process.env.ENV_NAME === "dev") {
      await connection.synchronize();
    }

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
