import { Module } from '@nestjs/common';
import { DeeplController } from './deepl.controller';
import { DeeplService } from './deepl.service';

@Module({
  controllers: [DeeplController],
  providers: [DeeplService],
})
export class DeeplModule { }
