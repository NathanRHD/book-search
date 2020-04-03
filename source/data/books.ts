import { Dictionary } from "underscore";

export namespace Book {
  export enum Status {
    /** Has been received as a gift */
    Gift,

    /** Has been read */
    Read,

    /** Is being lent to someone else */
    Lending,

    /** Is being borrowed from someone else */
    Borrowing,

    /** Is currently being read */
    Reading
  }

  export type Entity = {
    id: number;
    title: string;
    author: string;
    statuses: Status[];
  };

  export const repository: Dictionary<Entity> = {
    1: {
      id: 1,
      title: "The State and Revolution",
      author: "V.I. Lenin",
      statuses: [Status.Reading]
    },
    2: {
      id: 2,
      title: "The Colour of Magic",
      author: "Terry Pratchett",
      statuses: [Status.Read, Status.Gift]
    },
    3: {
      id: 3,
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      statuses: [Status.Read, Status.Gift]
    },
    4: {
      id: 4,
      title: "V for Vendetta",
      author: "Alan Moore & David Lloyd",
      statuses: []
    },
    5: {
      id: 5,
      title: "The Light Fantastic",
      author: "Terry Pratchett",
      statuses: [Status.Read, Status.Gift]
    },
    6: {
      id: 6,
      title: "The Making of the English Working Class",
      author: "E.P. Thompson",
      statuses: [Status.Reading]
    },
    7: {
      id: 7,
      title: "The ABC of Chairmanship",
      author: "Walter Citrine",
      statuses: [Status.Read, Status.Lending]
    },
    8: {
      id: 8,
      title: "Blackshirts & Reds",
      author: "Michael Parenti",
      statuses: [Status.Reading, Status.Borrowing]
    }
  };
}
