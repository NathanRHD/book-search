import * as Express from "express";

import { registerEndpoints } from "../endpoints";

import { NotificationService } from "./service";
import { Endpoints } from "../typings";

export namespace NotificationController {
  const requestToBorrow = async (
    req: Express.Request,
    res: Express.Response
  ) => {
    const {
      captchaAttempt,
      bookId,
      email,
    } = req.body as Endpoints.Notification.AskToBorrow.Request;

    const response = await NotificationService.askToBorrow(
      {
        captchaAttempt,
        bookId,
        email,
      },
      req.session.captcha,
      req["context"]
    );

    res.status(200).send(JSON.stringify(response));
  };

  registerEndpoints(
    (params) => `/notification/request-to-borrow`,
    "POST",
    requestToBorrow
  );
}
