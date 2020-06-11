import * as _ from "underscore";

import { Dictionary } from "underscore";
import { wait } from "../helpers";
import { Models } from "../models";
import { PaginationOptions } from "../typings";

export namespace BookRepository {
  const repository = {
    1: {
      id: 1,
      title: "The State and Revolution",
      author: "V.I. Lenin",
      statuses: [Models.Book.Status.Reading],
    },
    2: {
      id: 2,
      title: "The Colour of Magic",
      author: "Terry Pratchett",
      statuses: [Models.Book.Status.Read, Models.Book.Status.Gift],
    },
    3: {
      id: 3,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      statuses: [Models.Book.Status.Read, Models.Book.Status.Gift],
    },
    4: {
      id: 4,
      title: "V for Vendetta",
      author: "Alan Moore & David Lloyd",
      statuses: [],
    },
    5: {
      id: 5,
      title: "The Light Fantastic",
      author: "Terry Pratchett",
      statuses: [Models.Book.Status.Read, Models.Book.Status.Gift],
    },
    6: {
      id: 6,
      title: "The Making of the English Working Class",
      author: "E.P. Thompson",
      statuses: [Models.Book.Status.Reading],
    },
    7: {
      id: 7,
      title: "The ABC of Chairmanship",
      author: "Walter Citrine",
      statuses: [Models.Book.Status.Read, Models.Book.Status.Lending],
    },
    8: {
      id: 8,
      title: "Blackshirts & Reds",
      author: "Michael Parenti",
      statuses: [Models.Book.Status.Reading, Models.Book.Status.Borrowing],
    },
    9: {
      id: 9,
      title: "The Lord of the Rings: The Two Towers",
      author: "J.R.R. Tolkien",
      statuses: [
        Models.Book.Status.Read,
        Models.Book.Status.Reading,
        Models.Book.Status.Gift,
      ],
    },
    10: {
      id: 10,
      title: "The Lord of the Rings: The Return of the King",
      author: "J.R.R. Tolkien",
      statuses: [Models.Book.Status.Read, Models.Book.Status.Gift],
    },
  } as Dictionary<Models.Book.Entity>;

  export const getOne = async (id: number) => {
    await wait(1000);
    return repository[id];
  };

  export const getMany = async (
    paginationOptions: PaginationOptions,
    searchTerm?: string
  ) => {
    await wait(1000);

    const sorted = _.values(repository)
      .filter((book) => {
        if (searchTerm && !book.title.includes(searchTerm)) {
          return false;
        }

        return paginationOptions.direction === "backward"
          ? book.id < (paginationOptions.cursor || 0)
          : book.id > (paginationOptions.cursor || 0);
      })
      .sort((a, b) => a.id - b.id);

    return paginationOptions.direction === "backward"
      ? sorted.slice(paginationOptions.pageSize * -1)
      : sorted.slice(0, paginationOptions.pageSize);
  };
}
