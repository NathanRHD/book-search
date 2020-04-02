import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./dialog.scss";

type DetailsProps = {} & RouteComponentProps<{}, {}>;

export const Details: React.FC<DetailsProps> = props => {
  const closeDialog = React.useCallback(() => {
    props.router.push("/");
  }, [props.router]);

  return (
    <>
      <div className="dialog-overlay" onClick={closeDialog}></div>
      <div className="dialog details">
        <div className="header">
          <div className="user-details"></div>
          <div className="close-button" onClick={closeDialog}></div>
        </div>
        <div className="content"></div>
      </div>
    </>
  );
};
