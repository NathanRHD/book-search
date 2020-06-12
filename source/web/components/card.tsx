import * as React from "react";

import "./card.scss";
import { withRouter, Link } from "react-router";
import { Models } from "../api-sdk/typings";
import { unreadIcon } from "../helpers/status";

export namespace Card {
  export type Props = Models.Book;

  export const Component = withRouter((props: Props) => {
    const icon = props.statuses[0]?.icon ?? "";

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
        <i className={icon || unreadIcon}></i>
      </Link>
    );
  });
}
