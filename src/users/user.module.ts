import { Module } from '@nestjs/common';
// import { User } from './users/user.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
