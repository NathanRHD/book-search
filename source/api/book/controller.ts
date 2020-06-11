import * as Express from "express";

import { registerEndpoints } from "../endpoints";
import { BookService } from "./service";

export namespace BookController {
  const create = async (req: Express.Request, res: Express.Response) => {
    const response = await BookService.create(req.body);

    res.status(200).send(JSON.stringify(response));
  };

  registerEndpoints((params) => `/book`, "POST", create);

  const getOne = async (req: Express.Request, res: Express.Response) => {
    const id = Number(req.params.bookId);
    // @todo set context on all requests using a middleware to handle authentication
    const response = await BookService.getOne(id, req["context"]);

    res.status(200).send(JSON.stringify(response));
  };

  registerEndpoints(
    (params) => `/book/${params ? params["bookId"] : ":bookId"}`,
    "GET",
    getOne
  );

  const getMany = async (req: Express.Request, res: Express.Response) => {
    // @todo validate pagination options and search term
    const { paginationOptions, searchTerm } = req.body;

    const response = await BookService.getMany({
      paginationOptions,
      searchTerm,
      context: req["context"],
    });

    res.status(200).send(JSON.stringify(response));
  };

  registerEndpoints((params) => `/books/search`, "POST", getMany);
}
