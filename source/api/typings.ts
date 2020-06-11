import { Dictionary } from "underscore";

export type BaseEntity = {
  id: number;
};

export enum Role {
  Anon,
  User,
  Admin,
}

export type RequestContext = {
  id: number;
  role: Role;
};

export type PaginationOptions = {
  cursor?: number;

  // if true, the page should include the cursor entity
  inclusive?: boolean;

  pageSize: number;
  direction: "backward" | "forward";
};
