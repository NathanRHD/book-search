import * as React from "react";
import * as _ from "underscore";

import { RouteComponentProps, Link } from "react-router";

import "./view-book.scss";

import Helmet from "react-helmet";
import { Endpoints, Models } from "../../api-sdk/typings";
import { apiSdk, useFetch } from "../../api-sdk/sdk";
import { LoadingSpinner } from "../loading-spinner";
import { unreadIcon, unreadDescription } from "../../helpers/status";

export const StatusIcon: React.FC<Pick<
  Models.Status,
  "icon" | "description"
>> = (props) => (
  <div className="status">
    <i className={props.icon} />
    <p className="description">{props.description}</p>
  </div>
);

namespace AsideItem {
  export type Props = Models.Book;

  export const Component: React.FC<Props> = (props) => {
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
  };
}

export namespace ViewBook {
  export type Props = {} & RouteComponentProps<{ id: string }, {}>;

  export const Component: React.FC<Props> = (props) => {
    const { isPending, response, fetch } = useFetch<
      Endpoints.Book.GetMany.Response
    >(apiSdk["/books/search"]);

    const direction = React.useRef<"forward" | "backward">("forward");
    const pageSize = 9;

    React.useEffect(() => {
      const body: Endpoints.Book.GetMany.Request = {
        paginationOptions: {
          direction: direction.current,
          pageSize,
          cursor: Number(props.params.id),
          inclusive: true,
        },
      };
      fetch(undefined, body, 1000);
    }, []);

    const books = React.useMemo(() => response?.books ?? [], [response?.books]);

    const book = React.useMemo(() => {
      return books.find((book) => book.id === Number(props.params.id));
    }, [!!response, props.params.id]);

    const asideItems = React.useMemo(
      () => books.map((book) => <AsideItem.Component {...book} />),
      [books]
    );

    const icons = React.useMemo(() => {
      const mappedStatuses = book?.statuses.map((status) => (
        <StatusIcon {...status} key={status.id} />
      ));

      if (book && !book.statuses.find((book) => book.id === 1)) {
        mappedStatuses.push(
          <StatusIcon
            description={unreadDescription}
            icon={unreadIcon}
            key={"Unread"}
          />
        );
      }

      return mappedStatuses;
    }, [book]);

    const askToBorrow = React.useCallback(() => {
      props.router.push(`/details/${props.params.id}/ask-to-borrow`);
    }, [props.params.id]);

    if (isPending && !response) {
      return (
        <>
          <div className="view-book">
            <div className="main pending">
              <LoadingSpinner loading />
            </div>
          </div>
          {props.children}
        </>
      );
    }

    return (
      <>
        <div className="view-book">
          {!response ? (
            <div className="main not-found">
              <Helmet>
                <title>Not Found!</title>
              </Helmet>
              <h2>Book not found!</h2>
            </div>
          ) : (
            <>
              <Helmet>
                <title>{book.title}</title>
              </Helmet>

              <div className="aside">
                <div className="aside-list">{asideItems}</div>
              </div>

              <div className="main">
                <div className="book-details">
                  {icons && <div className="statuses">{icons}</div>}
                  <h2>{book.title}</h2>
                  {book.subtitle && <p className="subtitle">{book.subtitle}</p>}
                  <p className="author">{book.author}</p>
                </div>
                <div className="book-footer">
                  <button className="primary" onClick={askToBorrow}>
                    Ask to Borrow
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {props.children}
      </>
    );
  };
}
