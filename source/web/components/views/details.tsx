import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./dialog.scss";
import "./details.scss";
import { CloseButton } from "../close-button";

type DetailsProps = {} & RouteComponentProps<{}, {}>;

export const Details: React.FC<DetailsProps> = props => {
  const closeDialog = React.useCallback(() => {
    props.router.push("/");
  }, [props.router]);

  const stopPropOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <>
      <div className="dialog-overlay" onClick={closeDialog}>
        <div className="dialog details" onClick={stopPropOnClick}>
          <div className="header">
            <div className="user-details"></div>
            <CloseButton.Component onClick={closeDialog} />
          </div>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};
