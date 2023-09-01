import { Module } from '@nestjs/common';
import { ClaudeController } from './claude.controller';
import { ClaudeService } from './claude.service';

@Module({
  controllers: [ClaudeController],
  providers: [ClaudeService]
})
export class ClaudeModule {}
