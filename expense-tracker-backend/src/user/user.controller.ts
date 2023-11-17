import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() body: UserDto,
    @Res() res: Response,
  ): Promise<Response<User>> {
    try {
      const user: User = await this.userService.createUser(body.email);
      return res.status(HttpStatus.OK).send(user);
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }

  @Get('/list')
  async getUser(@Res() res: Response): Promise<Response<User>> {
    try {
      const users: User[] = await this.userService.getUsers();
      return res.status(HttpStatus.OK).send(users);
    } catch (error) {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).send({ error });
    }
  }
}
