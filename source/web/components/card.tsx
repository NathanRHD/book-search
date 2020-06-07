import * as React from "react";

import "./card.scss";
import { withRouter, WithRouterProps, Link } from "react-router";
import { Book } from "../../data/books";
import { getIconFromStatus } from "../helpers/books";

export namespace Card {
  export type Props = Book.Entity & WithRouterProps;

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
