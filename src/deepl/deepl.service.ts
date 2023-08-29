import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { API_kEY, Deepl_Headers, TARGET_URL } from 'src/config/deeplConfig';
interface DeeplCommonRequestInt {
    text: Array<string>;
    source_lang: string;
    target_lang: string;
}
@Injectable()
export class DeeplService {
    async getTranslateText(value: DeeplCommonRequestInt): Promise<any> {

        try {
            const baseData = await axios.post(TARGET_URL, value, {
                headers: Deepl_Headers
            });
            return baseData.data

        } catch (error) {
            return error;
        }
    }
}
