import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.setGlobalPrefix('api');


  //启动服务器问的那个
  const options = new DocumentBuilder()
    .setTitle('DeepL专业级翻译系统--接口文档')
    .setDescription('描述信息')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(8848);
}
bootstrap();
