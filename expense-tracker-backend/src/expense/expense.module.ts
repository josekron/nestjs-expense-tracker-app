import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { Expense } from './expense.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Expense, User])],
  providers: [ExpenseService],
  controllers: [ExpenseController],
})
export class ExpenseModule {}
