import * as React from "react";
import * as _ from "underscore";

import {
  RouteComponentProps,
  WithRouterProps,
  withRouter,
  Link
} from "react-router";
import { Book } from "../../../data/books";

import "./view-book.scss";
import Helmet from "react-helmet";

export namespace ViewBook {
  export type Props = {} & RouteComponentProps<{ id: string }, {}>;

  namespace Main {
    export type Props = { id: string };

    export const Component: React.FC<Props> = props => {
      const book = Book.repository[props.id];

      if (!book) {
        return (
          <div className="main not-found">
            <Helmet>
              <title>Not Found!</title>
            </Helmet>
            <h2>Book not found!</h2>
          </div>
        );
      }

      return (
        <div className="main">
          <Helmet>
            <title>{book.title}</title>
          </Helmet>
          <h2>{book.title}</h2>
        </div>
      );
    };
  }

  namespace Aside {
    export type Props = {};

    namespace AsideItem {
      export type Props = Book.Entity & WithRouterProps;

      export const Component = withRouter((props: Props) => {
        return (
          <Link
            className="aside-item"
            to={`/details/${props.id || ""}`}
            activeClassName="active"
          >
            <span className="title">{props.title}</span>
            <span className="author">{props.author}</span>
          </Link>
        );
      });
    }

    export const Component: React.FC<Props> = props => {
      const asideItems = React.useMemo(
        () =>
          _.values(Book.repository).map(book => (
            <AsideItem.Component {...book} />
          )),
        []
      );
      return (
        <div className="aside">
          <div className="aside-list">{asideItems}</div>
        </div>
      );
    };
  }

  export const Component: React.FC<Props> = props => {
    return (
      <div className="view-book">
        <Aside.Component />
        <Main.Component id={props.params.id} />
      </div>
    );
  };
}
