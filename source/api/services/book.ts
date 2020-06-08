import { BookRepository } from "../repositories/book";
import { PaginationOptions, RequestContext } from "../typings";

export namespace BookService {
  export const getOne = (id: number, context?: RequestContext) => {
    // @todo get additional data if authenticated
    return BookRepository.getOne(id);
  };
  export const getMany = (
    context,
    paginationOptions: PaginationOptions,
    searchTerm?: string
  ) => {
    // @todo get additional data if authenticated
    // @todo validate pagination options and search term
    return BookRepository.getMany(paginationOptions, searchTerm);
  };
}
