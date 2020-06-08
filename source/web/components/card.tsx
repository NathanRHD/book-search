import * as React from "react";

import "./card.scss";
import { withRouter, WithRouterProps, Link } from "react-router";
import { getIconFromStatus } from "../helpers/books";
import { Models } from "../api-sdk/models";

export namespace Card {
  export type Props = Models.Book.Entity & WithRouterProps;

  export const Component = withRouter((props: Props) => {
    const primaryStatus = React.useMemo(() => Math.max(...props.statuses), [
      props.statuses,
    ]);

    const icon = React.useMemo(() => getIconFromStatus(primaryStatus), [
      primaryStatus,
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
