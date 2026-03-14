import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/postgresql';
import { Expense } from '../expense/expense.entity';

@Entity()
export class User {
  @PrimaryKey()
  userId!: number;

  @Property()
  email!: string;

  @Property()
  createdOn = new Date();

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses = new Collection<Expense>(this);

  constructor(email: string) {
    this.email = email;
  }
}
