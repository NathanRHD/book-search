import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Book } from "../book/entity";
import { Models } from "../typings";

@Entity()
export class Status extends BaseEntity implements Models.Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icon: string;

  @Column()
  description: string;

  @ManyToMany((type) => Book, { cascade: true })
  books: Book[];
}
