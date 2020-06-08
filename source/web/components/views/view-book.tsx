import * as React from "react";
import * as _ from "underscore";

import { RouteComponentProps } from "react-router";

import "./view-book.scss";
import Helmet from "react-helmet";
import { Models } from "../../api-sdk/models";
import { apiSdk, useFetch } from "../../api-sdk/sdk";

export namespace ViewBook {
  export type Props = {} & RouteComponentProps<{ id: string }, {}>;

  namespace Main {
    export type Props = { id: string };

    export const Component: React.FC<Props> = (props) => {
      const { isPending, response, fetch } = useFetch<Models.Book.Entity>(
        apiSdk["/book/:bookId"]
      );

      React.useEffect(() => {
        fetch({ bookId: props.id }, undefined);
      }, []);

      // @todo error handling
      if (!isPending && !response) {
        return (
          <div className="main not-found">
            <Helmet>
              <title>Not Found!</title>
            </Helmet>
            <h2>Book not found!</h2>
          </div>
        );
      }

      if (!isPending && !!response) {
        return (
          <div className="main">
            <Helmet>
              <title>{response.title}</title>
            </Helmet>
            <h2>{response.title}</h2>
          </div>
        );
      }

      return <div className="main"></div>;
    };
  }

  // namespace Aside {
  //   export type Props = {};

  //   namespace AsideItem {
  //     export type Props = Models.Book.Entity & WithRouterProps;

  //     export const Component = withRouter((props: Props) => {
  //       return (
  //         <Link
  //           className="aside-item"
  //           to={`/details/${props.id || ""}`}
  //           activeClassName="active"
  //         >
  //           <span className="title">{props.title}</span>
  //           <span className="author">{props.author}</span>
  //         </Link>
  //       );
  //     });
  //   }

  //   export const Component: React.FC<Props> = (props) => {
  //     const asideItems = React.useMemo(
  //       () =>
  //         _.values(Models.Book.repository).map((book) => (
  //           <AsideItem.Component {...book} />
  //         )),
  //       []
  //     );
  //     return (
  //       <div className="aside">
  //         <div className="aside-list">{asideItems}</div>
  //       </div>
  //     );
  //   };
  // }

  export const Component: React.FC<Props> = (props) => {
    return (
      <div className="view-book">
        {/* <Aside.Component /> */}
        <Main.Component id={props.params.id} />
      </div>
    );
  };
}
