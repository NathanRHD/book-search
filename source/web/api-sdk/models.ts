export namespace Models {
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
      Reading,
    }

    export type Entity = {
      id: number;
      title: string;
      author: string;
      statuses: Status[];
    };
  }
}
