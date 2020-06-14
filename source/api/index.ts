import * as express from "express";
import * as _ from "underscore";
import { createConnection } from "typeorm";
import * as PostgressConnectionStringParser from "pg-connection-string";
import * as session from "express-session";
import * as pgSessionConnect from "connect-pg-simple";
import { Pool, PoolConfig } from "pg";

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
      return {
        url: process.env.DATABASE_URL,
      };
    }
  }
};

const init = async () => {
  try {
    const connectionOptions = getConnectionOptions();
    const connection = await createConnection({
      type: "postgres",
      entities: [Book, Status],
      ...connectionOptions,
    });
    if (process.env.ENV_NAME === "dev") {
      await connection.synchronize();
    }

    const pool = new Pool(connectionOptions as PoolConfig);

    apiRouter.use(
      session({
        store: new (pgSessionConnect(session))({
          pool,
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
      })
    );

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
