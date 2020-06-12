import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Status } from "../status/entity";
import { Models } from "../typings";

@Entity()
export class Book extends BaseEntity implements Models.Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column()
  author: string;

  @ManyToMany((type) => Status, { cascade: true })
  @JoinTable()
  statuses: Status[];
}
