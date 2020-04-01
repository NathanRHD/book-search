import * as React from "react";

import "./card.scss";

export enum Status {
  /** Has not been completely read */
  Unread,

  /** Has been received as a gift */
  Gift,

  /** Has been read */
  Read,

  /** Is being lent to someone else */
  Lending,

  /** Is being borrowed from someone else */
  Borrowing,

  /** Is currently being read */
  Reading
}

export namespace Card {
  export type Props = {
    title: string;
    author: string;
    statuses: Status[];
  };

  const getIconFromStatus = (status: Status) => {
    switch (status) {
      case Status.Unread: {
        return "fas fa-eye-slash";
      }
      case Status.Gift: {
        return "fas fa-gifts";
      }
      case Status.Read: {
        return "fas fa-check";
      }
      case Status.Lending: {
        return "fas fa-file-export";
      }
      case Status.Borrowing: {
        return "fas fa-file-import";
      }
      case Status.Reading: {
        return "fas fa-eye";
      }
    }
  };

  export const Component: React.FC<Props> = props => {
    const primaryStatus = React.useMemo(() => Math.max(...props.statuses), [
      props.statuses
    ]);

    const icon = React.useMemo(() => getIconFromStatus(primaryStatus), [
      primaryStatus
    ]);

    return (
      <div className="card">
        <div className="main">
          <h2 className="title">{props.title}</h2>
          <span className="author">{props.author}</span>
        </div>
        <i className={icon}></i>
      </div>
    );
  };
}
