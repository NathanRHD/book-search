import { BookRepository } from "./repository";
import { PaginationOptions, RequestContext } from "../typings";

export namespace BookService {
  export const getOne = (id: number, context?: RequestContext) => {
    // @todo get additional data if authenticated
    return BookRepository.getOne(id);
  };
  export const getMany = (options: {
    paginationOptions: PaginationOptions;
    searchTerm?: string;
    context?: RequestContext;
  }) => {
    // @todo get additional data if authenticated
    // @todo validate pagination options and search term
    return BookRepository.getMany(
      options.paginationOptions,
      options.searchTerm
    );
  };
}
