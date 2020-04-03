import * as React from "react";

import "./close-button.scss";
import { Link } from "react-router";

export namespace CloseButton {
  export type Props =
    | {
        onClick: () => void;
      }
    | { to: string };

  export const Component: React.FC<Props> = props => {
    const isButton = !!props["onClick"];

    // typings need to be improved...
    const WrapperElement = isButton ? "div" : (Link as any);

    return (
      <WrapperElement className="close-button" {...props}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6L11 11M11 11L16 16M11 11L16 6M11 11L6 16M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" />
        </svg>
      </WrapperElement>
    );
  };
}
