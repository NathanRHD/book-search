import {
  RequestContext,
  Endpoints,
  Role,
  NotificationSendData,
} from "../typings";
import { CaptchaService } from "../captcha/service";
import { BookService } from "../book/service";
import { createTransport } from "nodemailer";
import Mail = require("nodemailer/lib/mailer");

export namespace NotificationService {
  export const send = async (data: NotificationSendData): Promise<void> => {
    // @todo send notification using nodemailer
    // https://nodemailer.com/smtp/testing/

    const to = data.to || process.env.DEFAULT_NOTIFICATION_RECIPIENT;

    const transport = createTransport({
      host: process.env.SMTP_SERVER,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const message: Mail.Options = {
      to,
      from: process.env.SMTP_FROM_ADDRESS,
      subject: data.subject,
      text: data.message,
    };

    console.log(message);

    await transport.sendMail(message);

    console.log("success");

    return;
  };

  export const askToBorrow = async (
    body: Endpoints.Notification.AskToBorrow.Request,
    captchaText: string,
    context?: RequestContext
  ): Promise<Endpoints.Notification.AskToBorrow.Response> => {
    // @todo validate body and captcha text

    const { captchaAttempt, bookId, email } = body;

    await CaptchaService.solve({ captchaAttempt, captchaText });

    const book = await BookService.getOne(bookId, { role: Role.System });

    const message = `Someone would like to borrow "${book.title}${
      book.subtitle ? `: ${book.subtitle}` : ""
    }" (#${book.id}).
    
Please contact them here: ${email}`;

    const data: NotificationSendData = {
      message,
      subject: "Request to Borrow",
    };

    await send(data);
  };
}
