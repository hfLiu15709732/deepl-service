import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApisService } from './apis.service';
import { DeeplService } from 'src/deepl/deepl.service';

@Controller('apis')
@ApiTags('API用户发展模块') // 接口文档分组
export class ApisController {
  constructor(
    private readonly apisService: ApisService,
    private readonly deeplService: DeeplService,
  ) {}

  @Post('/getText')
  @ApiOperation({
    summary: 'API端用户获取常规文本翻译',
    description: 'API端用户获取常规文本翻译',
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
