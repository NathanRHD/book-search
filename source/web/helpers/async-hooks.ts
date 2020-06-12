import * as React from "react";
import { wait } from "../api-sdk/sdk";

export const useThrottle = <Response>(
  callback: (value: string) => void,
  ms: number
) => {
  const [value, setValue] = React.useState<string>(undefined);

  // this use of refs and state is unfortunate, but the current value of the ref will not reliably trigger the effect
  const [waitCount, setWaitCount] = React.useState(0);
  const waitCountRef = React.useRef(0);

  React.useEffect(() => {
    if (waitCount === 0 && value !== undefined) {
      callback(value);
    }
  }, [waitCount]);

  const onChange = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);

      waitCountRef.current++;
      setWaitCount(waitCountRef.current);

      await wait(ms);

      waitCountRef.current--;
      setWaitCount(waitCountRef.current);
    },
    [ms]
  );

  return {
    value,
    onChange,
  };
};
