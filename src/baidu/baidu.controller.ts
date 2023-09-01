import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaiduService } from './baidu.service';
import { TurboUrl } from 'src/config/baiduConfig';
import { Response } from 'express';

@Controller('baidu')
@ApiTags('文心一言 大模型调用接口') // 接口文档分组
export class BaiduController {
  constructor(private readonly baiduService: BaiduService) {}

  @Post('/ernie/turbo/stream')
  @ApiOperation({
    summary: '流式传输的文心一言Turbo接口',
    description: '流式传输的文心一言Turbo接口',
  })
  async getErnieTurboStream(@Body() body, @Res() res: Response) {
    const response = await fetch(TurboUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: body.messages,
        stream: true,
      }),
    });

    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      let jsonp = new TextDecoder().decode(value);
      let jsonstr = jsonp.substring(jsonp.indexOf('{'));
      let obj = JSON.parse(jsonstr);
      console.log(obj.result);

      res.write(JSON.stringify(obj.result));
    }
    res.end();
  }

  @Post('/ernie/turbo/muti')
  @ApiOperation({
    summary: '基础对话的文心一言Turbo接口',
    description: '基础对话的文心一言Turbo接口',
  })
  async getErnieTurboMutiChat(@Body() body): Promise<any> {
    console.log(body, 111111111111111111);

    const baseData = this.baiduService.getTurboMuti(body.messages);

    return baseData;
  }

  @Post('/ernie/turbo/sigal')
  @ApiOperation({ summary: '', description: '简易的api-key数据测试' })
  async getErnieTurboSigalChat(@Body() body): Promise<any> {
    const baseData = this.baiduService.getTurboMuti(body);

    return baseData;
  }
}
