import * as controllers from "./controllers";
import { endpoints } from "./endpoints";
import { basePath } from "./config";

const generateSdk = () => {
  // this line is needed, as presumably unused imports are removed by ts-node?
  console.log("CONTROLLERS", controllers);

  const fetcherKeys = Object.keys(endpoints);
  // @todo generate a fully typed sdk, probably replacing the function toString with something a lot cleaner, and naming typings by convention
  const fetchersString = fetcherKeys.map(
    (key, index) => `
"${key}": (params, body) => {
  const paramsToPath = ${endpoints[key].paramsToPath.toString()};

  return new Promise<any>((res, rej) => {
    const request = new XMLHttpRequest();
    request.open("${
      endpoints[key].method
    }", \`${basePath}\${paramsToPath(params)}\`);
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
},`
  );

  const sdkString = `import * as React from "react";

export const apiSdk = {
  ${fetchersString.join("\n")}
}

export const wait = (ms: number) => {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms);
  });
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

  const fetch = React.useCallback(async (params, body, ms?: number) => {
    setIsPending(true);
    try {
      const promises: Array<Promise<any>> = [fetcher(params, body)];

      if (ms) {
        promises.push(wait(ms));
      }

      const [response] = await Promise.all(promises);
      setIsPending(false);
      setResponse(response);
    } catch (e) {
      console.log("ERROR", e);
      setIsPending(false);
      setResponse(undefined);
    }
  }, []);

  return { isPending, response, fetch };
};`;
  console.log("TS SDK STRING", sdkString);
  // @todo write sdk string to file
};

generateSdk();
