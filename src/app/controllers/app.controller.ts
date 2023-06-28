import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

import { UserService } from '../../db/mysql/user/services/user.service';
import { User } from 'src/db/mysql/user/models/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  async getHello(): Promise<User[]> {
    console.log(this.userService);
    return await this.userService.findAll();
  }
}
