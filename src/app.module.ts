import { Module } from '@nestjs/common';
import { DeeplModule } from './deepl/deepl.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ApisModule } from './apis/apis.module';
import { BaiduModule } from './baidu/baidu.module';
import { ClaudeModule } from './claude/claude.module';

@Module({
  imports: [DeeplModule, UserModule, ApisModule, BaiduModule, ClaudeModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
