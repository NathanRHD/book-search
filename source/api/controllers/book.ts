import { registerEndpoints } from "../endpoints";
import { BookService } from "../services/book";

import * as Express from "express";

export namespace BookController {
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

  registerEndpoints((params) => `/books`, "POST", getMany);
}
