import { appConfiguration } from '@heroes-app/api/utils-config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfiguration],
    }),
  ],
})
export class ApiFeatureConfigModule {}
