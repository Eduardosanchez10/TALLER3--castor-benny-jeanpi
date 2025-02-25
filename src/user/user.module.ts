import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
    imports: [UserModule ],
    controllers: [UserController],
    providers: [UserService],
  })
export class UserModule {}
