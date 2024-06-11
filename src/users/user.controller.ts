import { Controller, Get } from '@nestjs/common';
// import { UserService } from './user.service';

@Controller('users')
export class UserController {
  //   constructor(private readonly UserService: UserService) {}

  @Get()
  getAll() {
    return 'eqeqwqwe';
    console.log(123123);

    // return this.UserService.getHello();
  }
}
