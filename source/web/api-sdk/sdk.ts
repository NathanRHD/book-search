import * as React from "react";

export const apiSdk = {
  "/book": (params, body) => {
    const paramsToPath = (params) => `/book`;

    return new Promise<any>((res, rej) => {
      const request = new XMLHttpRequest();
      request.open("POST", `/api${paramsToPath(params)}`);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          res(JSON.parse(this.responseText));
        }
      };
      request.send(JSON.stringify(body));
    });
  },

  "/book/:bookId": (params, body) => {
    const paramsToPath = (params) =>
      `/book/${params ? params["bookId"] : ":bookId"}`;

    return new Promise<any>((res, rej) => {
      const request = new XMLHttpRequest();
      request.open("GET", `/api${paramsToPath(params)}`);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          res(JSON.parse(this.responseText));
        }
      };
      request.send(JSON.stringify(body));
    });
  },

  "/books/search": (params, body) => {
    const paramsToPath = (params) => `/books/search`;

    return new Promise<any>((res, rej) => {
      const request = new XMLHttpRequest();
      request.open("POST", `/api${paramsToPath(params)}`);
      request.setRequestHeader(
        "Content-Type",
        "application/json;charset=UTF-8"
      );
      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          res(JSON.parse(this.responseText));
        }
      };
      request.send(JSON.stringify(body));
    });
  },
};

/**
 *
 * @param fetcher This value should never change, perhaps it ought to be used only from within a closure?
 */
export const useFetch = <Response>(
  fetcher: (params, body) => Promise<Response>
) => {
  const [isPending, setIsPending] = React.useState(undefined);
  const [response, setResponse] = React.useState<Response>(undefined);

  const fetch = React.useCallback(async (params, body) => {
    setIsPending(true);
    try {
      const response = await fetcher(params, body);
      setIsPending(false);
      setResponse(response);
    } catch (e) {
      console.log("ERROR", e);
      setIsPending(false);
      setResponse(undefined);
    }
  }, []);

  return { isPending, response, fetch };
};
