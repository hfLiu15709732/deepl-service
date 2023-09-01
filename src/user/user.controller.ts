import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { DeeplService } from 'src/deepl/deepl.service';
import { promises } from 'dns';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('Web用户发展模块') // 接口文档分组
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly deeplService: DeeplService,
  ) {}

  @Post('/getText')
  @ApiOperation({
    summary: 'Web端用户获取常规文本翻译',
    description: 'Web端用户获取常规文本翻译',
  })
  getTranslateText(@Body() body): any {
    let baseData = this.deeplService.getTranslateText({
      text: [`${body.text}`],
      target_lang: `${body.target_lang}`,
      source_lang: `${body.source_lang}`,
    });

    return baseData;
  }
}
