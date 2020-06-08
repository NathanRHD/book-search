import * as express from "express";
import { clientRouter } from "./web/server";
import { apiRouter } from "./api";

const app = express();

const port = process.env.PORT || 4040;

app.use("/", clientRouter);
app.use("/api", apiRouter);
app.listen(port);
