import { Injectable } from '@nestjs/common';
import { User } from '../../../interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = []; // In-memory user data store

  getAllUsers(): User[] {
    return this.users;
  }
}
