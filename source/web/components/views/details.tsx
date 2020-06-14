import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./details.scss";
import { Dialog } from "../dialog";
import { CloseButton } from "../close-button";

type DetailsProps = {} & RouteComponentProps<{}, {}>;

export const Details: React.FC<DetailsProps> = (props) => {
  const closeDialog = React.useCallback(() => {
    props.router.push("/");
  }, []);

  return (
    <>
      <Dialog.Component
        onClose={closeDialog}
        headerItem={<div className="user-details"></div>}
        className="details"
      >
        <div className="header">
          <div className="user-details" />
          <CloseButton.Component onClick={closeDialog} />
        </div>
        {props.children}
      </Dialog.Component>
    </>
  );
};
