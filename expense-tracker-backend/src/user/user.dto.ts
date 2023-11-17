import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(7)
  @MaxLength(250)
  @IsNotEmpty()
  email!: string;
}
