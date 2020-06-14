import * as Express from "express";
import * as captchaGen from "captchagen";

import { registerEndpoints } from "../endpoints";

import { JPEGStream } from "canvas";

export namespace CaptchaController {
  const get = async (req: Express.Request, res: Express.Response) => {
    const newCaptcha = captchaGen.create();

    req.session.captcha = newCaptcha.text();

    newCaptcha.generate();

    const stream: JPEGStream = newCaptcha.stream("jpeg");

    const data = await stream.read();

    res.contentType("jpeg");
    res.status(200).send(data);
  };

  registerEndpoints((params) => `/captcha`, "GET", get);
}
