import * as _ from "underscore";

import { Dictionary } from "underscore";
import { wait } from "../helpers";
import { Models } from "../models";
import { PaginationOptions } from "../typings";
import { getConnection, Brackets } from "typeorm";
import { Book } from "./entity";

export namespace BookRepository {
  export const create = async (book) => {
    const connection = getConnection();

    const entity = await connection.getRepository(Book).create();
    entity.title = book.title;
    entity.subtitle = book.subtitle;
    entity.author = book.author;
    entity.statuses = [];

    const createdBook = await entity.save();

    return createdBook;
  };
  export const getOne = async (id: number) => {
    const connection = getConnection();
    const book = await connection.getRepository(Book).findOne(id, {
      relations: ["statuses"],
    });

    await wait(1000);

    return book;
  };

  export const getMany = async (
    paginationOptions: PaginationOptions,
    searchTerm?: string
  ) => {
    const connection = getConnection();
    let qb = connection.getRepository(Book).createQueryBuilder().select();

    if (searchTerm) {
      qb.where(
        new Brackets((qb2) => {
          qb2
            .where("title ILIKE :searchTerm", {
              searchTerm: `%${searchTerm}%`,
            })
            .orWhere("title ILIKE :searchTerm", {
              searchTerm: `%${searchTerm}%`,
            })
            .orWhere("author ILIKE :searchTerm", {
              searchTerm: `%${searchTerm}%`,
            });
        })
      );
    }

    if (paginationOptions.cursor) {
      let cursorOperator =
        paginationOptions.direction === "backward" ? "<" : ">";

      if (paginationOptions.inclusive) {
        cursorOperator = cursorOperator + "=";
      }

      qb.andWhere(`Book.id ${cursorOperator} :cursor`, {
        cursor: paginationOptions.cursor,
      });
    }

    const booksRemaining = await qb.getCount();

    const finalPage = booksRemaining <= paginationOptions.pageSize;

    const books = await qb
      .take(paginationOptions.pageSize)
      .leftJoinAndSelect("Book.statuses", "Status")
      .getMany();

    console.log("BOOKS", books);

    await wait(1000);

    return { books, finalPage };
  };
}
