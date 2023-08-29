import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeeplModule } from './deepl/deepl.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DeeplModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
