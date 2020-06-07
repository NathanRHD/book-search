import { Book } from "../../data/books";

export const getIconFromStatus = (status: Book.Status) => {
  switch (status) {
    case Book.Status.Reading: {
      return "fas fa-eye";
    }
    case Book.Status.Borrowing: {
      return "fas fa-file-import";
    }
    case Book.Status.Lending: {
      return "fas fa-file-export";
    }
    case Book.Status.Read: {
      return "fas fa-check";
    }
    case Book.Status.Gift: {
      return "fas fa-gifts";
    }

    // unread is the absence of read, and less important than other statuses
    default: {
      return "fas fa-eye-slash";
    }
  }
};

export const getDescriptionFromStatus = (status: Book.Status) => {
  switch (status) {
    case Book.Status.Reading: {
      return "Currently reading";
    }
    case Book.Status.Borrowing: {
      return "Borrowed";
    }
    case Book.Status.Lending: {
      return "Lending";
    }
    case Book.Status.Read: {
      return "Already read";
    }
    case Book.Status.Gift: {
      return "A gift";
    }

    // unread is the absence of read
    default: {
      return "Unread";
    }
  }
};
