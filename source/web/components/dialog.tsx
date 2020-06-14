import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./dialog.scss";

import { CloseButton } from "./close-button";

export namespace Dialog {
  type Props = {
    onClose: () => void;
    headerItem: JSX.Element;
    className?: string;
  };

  export const Component: React.FC<Props> = (props) => {
    const stopPropOnClick = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      },
      []
    );

    return (
      <>
        <div className="dialog-overlay" onClick={props.onClose}>
          <div
            className={`dialog${props.className ? " " + props.className : ""}`}
            onClick={stopPropOnClick}
          >
            <div className="content">{props.children}</div>
          </div>
        </div>
      </>
    );
  };
}
