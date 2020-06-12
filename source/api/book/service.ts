import { BookRepository } from "./repository";
import { PaginationOptions, RequestContext, Endpoints } from "../typings";

export namespace BookService {
  export const create = async (
    body: Endpoints.Book.Create.Request,
    context?: RequestContext
  ): Promise<Endpoints.Book.Create.Response> => {
    // @todo throw if unauthenticated
    // @todo validate book
    const {
      id,
      title,
      subtitle,
      author,
      statuses,
    } = await BookRepository.create(body);

    return { id, title, subtitle, author, statuses };
  };

  export const getOne = (
    id: number,
    context?: RequestContext
  ): Promise<Endpoints.Book.GetOne.Response> => {
    // @todo get additional data if authenticated
    return BookRepository.getOne(id);
  };

  export const getMany = (
    body: Endpoints.Book.GetMany.Request,
    context?: RequestContext
  ): Promise<Endpoints.Book.GetMany.Response> => {
    // @todo get additional data if authenticated
    // @todo validate pagination options and search term
    return BookRepository.getMany(body.paginationOptions, body.searchTerm);
  };
}
