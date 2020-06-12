import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Book } from "../book/entity";

@Entity()
export class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icon: string;

  @Column()
  description: string;

  @ManyToMany((type) => Book, { cascade: true })
  books: Book[];
}
