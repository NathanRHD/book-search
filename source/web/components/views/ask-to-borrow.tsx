import * as React from "react";
import { CloseButton } from "../close-button";
import { Dialog } from "../dialog";
import { RouteComponentProps } from "react-router";

import "./ask-to-borrow.scss";
import { apiSdk, useFetch } from "../../api-sdk/sdk";
import { Endpoints } from "../../api-sdk/typings";
import { LoadingSpinner } from "../loading-spinner";

export namespace AskToBorrow {
  type Props = {} & RouteComponentProps<{ id: string }, {}>;

  export const Component: React.FC<Props> = (props) => {
    const captchaSrc = React.useMemo(
      () => `/api/captcha?cb=${new Date().toISOString()}`,
      []
    );
    const closeDialog = React.useCallback(() => {
      props.router.push(`/details/${props.params.id}`);
    }, [props.params.id]);

    const [email, setEmail] = React.useState("");
    const [captchaAttempt, setCaptchaAttempt] = React.useState("");

    const { fetch, isPending, response } = useFetch(
      apiSdk["/notification/request-to-borrow"]
    );

    const submit = React.useCallback(() => {
      const body: Endpoints.Notification.AskToBorrow.Request = {
        bookId: Number(props.params.id),
        captchaAttempt,
        email,
      };

      fetch(undefined, body, 500);
    }, [props.params.id, captchaAttempt, email]);

    return (
      <Dialog.Component
        className="ask-to-borrow"
        onClose={closeDialog}
        headerItem={<div />}
      >
        <div className="header">
          <CloseButton.Component onClick={closeDialog} />
        </div>
        <div className="main">
          <label htmlFor="email-input">
            I'll need your email address to let you know when your book is
            available:
          </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src={captchaSrc} className="captcha" width={200} height={100} />
          <label htmlFor="captcha-input">
            You're a robot! Only joking&hellip; Or am I? Enter the text from the
            image above to prove me wrong:
          </label>
          <input
            id="captcha-input"
            type="text"
            value={captchaAttempt}
            onChange={(e) => setCaptchaAttempt(e.target.value)}
          />
          <div className="submit">
            <button
              disabled={
                captchaAttempt.length === 0 || email.length === 0 || isPending
              }
              className="primary"
              onClick={submit}
            >
              Submit
            </button>
            <LoadingSpinner inline loading={isPending} />
          </div>
        </div>
      </Dialog.Component>
    );
  };
}
