import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../user/user.entity';

@Entity()
export class Expense {
  @PrimaryKey()
  expenseId!: number;

  @ManyToOne(() => User)
  user: User;

  @Property()
  name!: string;

  @Property()
  description: string;

  @Property()
  total!: number;

  @Property()
  createdOn = new Date();

  constructor(name: string, description: string, total: number) {
    this.name = name;
    this.description = description;
    this.total = total;
  }
}
