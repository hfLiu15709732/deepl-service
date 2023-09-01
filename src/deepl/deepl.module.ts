import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DeeplController } from './deepl.controller';
import { DeeplService } from './deepl.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  controllers: [DeeplController],
  providers: [DeeplService],
  exports: [DeeplService],
})
export class DeeplModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('deepl');
  }
}
