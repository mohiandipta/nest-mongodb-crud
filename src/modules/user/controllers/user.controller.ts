import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    const userName = 'Mohian Mustafa';
    return userName;
  }
}
