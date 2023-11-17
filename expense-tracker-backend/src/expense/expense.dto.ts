import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class ExpenseDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @MinLength(2)
  @MaxLength(250)
  @IsNotEmpty()
  name!: string;

  description: string;

  @IsNotEmpty()
  total!: number;
}
