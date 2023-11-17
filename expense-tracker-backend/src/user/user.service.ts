import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async createUser(email: string): Promise<User> {
    const user: User = new User(email);

    this.userRepository.create(user);
    await this.userRepository.getEntityManager().persistAndFlush(user);

    return user;
  }

  async getUsers(): Promise<User[]> {
    const users: User[] = await this.userRepository.findAll();
    return users;
  }
}
