import { CaptchaSolveData } from "../typings";

export namespace CaptchaService {
  export const solve = async (data: CaptchaSolveData): Promise<void> => {
    // @todo validate body

    if (!data.captchaText) {
      throw new Error("Captcha expired!");
    }

    if (data.captchaAttempt !== data.captchaText) {
      throw new Error("Captcha doesn't match!");
    }

    return;
  };
}
