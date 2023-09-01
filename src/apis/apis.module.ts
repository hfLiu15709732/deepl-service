import { Module } from '@nestjs/common';
import { ApisController } from './apis.controller';
import { ApisService } from './apis.service';
import { DeeplModule } from 'src/deepl/deepl.module';

@Module({
  imports: [DeeplModule],
  controllers: [ApisController],
  providers: [ApisService],
})
export class ApisModule {}
