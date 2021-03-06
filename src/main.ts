import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public');

  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
