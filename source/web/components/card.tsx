import * as React from "react";

import "./card.scss";

export namespace Card {
  export type Props = {
    title: string;
    author: string;
  };

  export const Component: React.FC<Props> = props => {
    return (
      <div className="card">
        <div className="main">
          <h2 className="title">{props.title}</h2>
          <span className="author">{props.author}</span>
        </div>
        <i className="fas fa-gifts"></i>
      </div>
    );
  };
}
