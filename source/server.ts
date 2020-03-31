import * as express from "express"
import { runWebServer } from "./web/server"

const server = express()

const port = process.env.PORT || 4040

runWebServer(server)

server.listen(port)