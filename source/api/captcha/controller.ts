import * as Express from "express";
import * as captcha from "nodejs-captcha";

import { registerEndpoints } from "../endpoints";

import { CaptchaService } from "./service";

export namespace CaptchaController {
  const get = async (req: Express.Request, res: Express.Response) => {
    const newCaptcha = captcha();

    req.session.captcha = newCaptcha.value;

    const data = Buffer.from(newCaptcha.image.split(",")[1], "base64");

    res.contentType("jpeg");
    res.status(200).send(data);
  };

  registerEndpoints((params) => `/captcha`, "GET", get);
}
