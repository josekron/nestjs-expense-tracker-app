import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserController } from './user.controller';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
