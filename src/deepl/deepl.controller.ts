import { Controller, Get } from '@nestjs/common';
import { DeeplService } from './deepl.service';

@Controller('deepl')
export class DeeplController {
    constructor(private readonly deeplService: DeeplService) { }

    @Get('/test')
    getHello(): any {
        return this.deeplService.getTranslateText({
            text: ['Hello,World'],
            target_lang: 'ZH',
            source_lang: 'EN',
        });
    }
}
