import * as React from "react";

import "./card.scss";
import { withRouter, WithRouterProps, Link } from "react-router";
import { Book } from "../../data/books";

export namespace Card {
  export type Props = Book.Entity & WithRouterProps;

  const getIconFromStatus = (status: Book.Status) => {
    switch (status) {
      case Book.Status.Reading: {
        return "fas fa-eye";
      }
      case Book.Status.Borrowing: {
        return "fas fa-file-import";
      }
      case Book.Status.Lending: {
        return "fas fa-file-export";
      }
      case Book.Status.Read: {
        return "fas fa-check";
      }
      case Book.Status.Gift: {
        return "fas fa-gifts";
      }

      // unread is the absence of read, and less important than other statuses
      default: {
        return "fas fa-eye-slash";
      }
    }
  };

  export const Component = withRouter((props: Props) => {
    const primaryStatus = React.useMemo(() => Math.max(...props.statuses), [
      props.statuses
    ]);

    const icon = React.useMemo(() => getIconFromStatus(primaryStatus), [
      primaryStatus
    ]);

    return (
      <Link
        className="card"
        to={`/details/${props.id || ""}`}
        activeClassName="active"
      >
        <div className="main">
          <h2 className="title">{props.title}</h2>
          <span className="author">{props.author}</span>
        </div>
        <i className={icon}></i>
      </Link>
    );
  });
}
