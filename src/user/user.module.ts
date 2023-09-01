import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DeeplService } from 'src/deepl/deepl.service';
import { DeeplModule } from 'src/deepl/deepl.module';

@Module({
  imports: [DeeplModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
