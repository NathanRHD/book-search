/**
 * Construct a type with the properties of T except for those in type K.
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export enum Role {
  Anon,
  User,
  Admin,
  System,
}

export type RequestContext = {
  id?: number;
  role: Role;
};

export type PaginationOptions = {
  cursor?: number;

  // if true, the page should include the cursor entity
  inclusive?: boolean;

  pageSize: number;
  direction: "backward" | "forward";
};

type ModelBase = {
  id: number;
};

export namespace Models {
  export type Book = ModelBase & {
    title: string;
    subtitle?: string;
    author: string;
    statuses: Status[];
  };
  export type Status = ModelBase & {
    id: number;
    icon: string;
    description: string;
    books: Book[];
  };
}

export type CaptchaSolveData = {
  captchaText: string;
  captchaAttempt: string;
};

export type NotificationSendData = {
  message: string;
  subject: string;
  to?: string;
};

export namespace Endpoints {
  export namespace Book {
    export namespace Create {
      export type Request = Omit<Models.Book, "id">;
      export type Response = Models.Book;
    }
    export namespace GetOne {
      export type Response = Models.Book;
    }
    export namespace GetMany {
      export type Request = {
        searchTerm?: string;
        paginationOptions: PaginationOptions;
      };
      export type Response = {
        books: Models.Book[];
        firstPage: boolean;
        finalPage: boolean;
      };
    }
  }
  export namespace Notification {
    export namespace AskToBorrow {
      export type Request = {
        captchaAttempt: string;
        email: string;
        bookId: number;
      };
      export type Response = void;
    }
  }
}
