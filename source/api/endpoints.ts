import * as Express from "express";

export const endpoints = {};

export const registerEndpoints = <Params, Body, Response>(
  /**
   * if params is not provided, should return a path in the pattern expected by express, i.e. '/path/to/endpoint/:param1/:param2
   */
  paramsToPath: (params?: Params) => string,

  method: "GET" | "POST",
  controller: (req: Express.Request, res: Express.Response, next) => void
) => {
  endpoints[paramsToPath()] = { paramsToPath, method, controller };
};
