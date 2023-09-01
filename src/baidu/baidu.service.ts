import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TurboUrl } from 'src/config/baiduConfig';

@Injectable()
export class BaiduService {
  async getTurboStream(chatArray: any): Promise<any> {
    console.log(chatArray, 222222);

    let target: string = '';
    const response = await fetch(TurboUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: chatArray,
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
      target = obj.result;
    }
    return target;
  }

  async getTurboMuti(chatArray: any): Promise<any> {
    const response = await axios.post(TurboUrl, { messages: chatArray });
    return response.data.result;
  }
}
