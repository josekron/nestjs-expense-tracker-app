import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Expense } from './expense.entity';
import { User } from '../user/user.entity';
import { ExpenseDto } from './expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: EntityRepository<Expense>,

    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async createExpense(expenseDto: ExpenseDto): Promise<Expense> {
    const user: User = await this.userRepository.findOne({
      userId: expenseDto.userId,
    });

    if (!user) {
      throw new HttpException(
        {
          message: `User ${expenseDto.userId} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const expense: Expense = new Expense(
      expenseDto.name,
      expenseDto.description,
      expenseDto.total,
    );

    expense.user = this.userRepository.getReference(expenseDto.userId as never);
    this.expenseRepository.create(expense);
    await this.expenseRepository.getEntityManager().persistAndFlush(expense);

    return expense;
  }

  async getExpenses(userId: number): Promise<any> {
    const user: User = await this.userRepository.findOne({
      userId: userId,
    });

    if (!user) {
      throw new HttpException(
        {
          message: `User ${userId} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const expenses: Expense[] = await this.expenseRepository.find({
      user: user,
    });

    const total: number = expenses.reduce(
      (sum, current) => sum + Number(current.total),
      0,
    );

    return {
      total: Math.round(total * 100) / 100,
      expenses: expenses,
    };
  }

  async deleteExpense(expenseId: number): Promise<Expense> {
    let expense: Expense;

    try {
      expense = await this.expenseRepository.findOneOrFail({
        expenseId: expenseId,
      });

      await this.expenseRepository.nativeDelete({ expenseId: expenseId });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          message: `Expense ${expenseId} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return expense;
  }
}
