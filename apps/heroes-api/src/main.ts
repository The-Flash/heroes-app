/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AppConfiguration, appConfiguration } from '@heroes-app/api/utils-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(appConfig.port);
  Logger.log(
    `Listening on: ${appConfig.domain}/${globalPrefix}`
  );
}

bootstrap();
