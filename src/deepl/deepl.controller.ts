import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DeeplService } from './deepl.service';
import { ApiBody, ApiOperation, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('deepl')
@ApiTags('Deepl通信接口与API-key测试') // 接口文档分组
export class DeeplController {
    constructor(private readonly deeplService: DeeplService) { }

    @Get('/testKey')
    @ApiOperation({ summary: '简易的api-key数据测试', description: '简易的api-key数据测试' })
    @ApiQuery({
        name: 'text',
        description: '获取文本的翻译信息，自动检测语言',
        required: true,
        type: String,
    })
    testKeyLittle(@Query() query): any {
        return this.deeplService.getTranslateText({
            text: [`${query.text}`],
            target_lang: 'ZH',
            source_lang: '',
        });
    }

    @Post('/testKey')
    @ApiOperation({ summary: '分选项的api-key数据测试', description: '分选项的api-key数据测试' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                text: { type: 'string' },
                source_lang: { type: 'string', required: ["true"] },
                target_lang: { type: 'string', required: ['true'] },
            }
        }
    })
    testKey(@Body() body): any {
        console.log(body);

        return this.deeplService.getTranslateText({
            text: [`${body.text}`],
            target_lang: `${body.target_lang}`,
            source_lang: `${body.source_lang}`,
        });
    }
}
