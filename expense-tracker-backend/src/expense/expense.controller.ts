import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { ExpenseDto } from './expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/user/:id')
  async getExpenses(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<Expense>> {
    const expenses = await this.expenseService.getExpenses(id);
    return res.status(HttpStatus.OK).send(expenses);
  }

  @Post()
  async saveExpense(
    @Body() body: ExpenseDto,
    @Res() res: Response,
  ): Promise<Response<Expense>> {
    try {
      const expense: Expense = await this.expenseService.createExpense(body);
      return res.status(HttpStatus.OK).send(expense);
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }

  @Delete('/:id')
  async deleteExpenses(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<Expense>> {
    try {
      const expense = await this.expenseService.deleteExpense(id);
      return res.status(HttpStatus.OK).send(expense);
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }
}
