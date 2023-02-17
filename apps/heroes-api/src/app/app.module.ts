import { ApiFeatureConfigModule } from '@heroes-app/api/feature-config';
import { ApiHeroesModule } from '@heroes-app/api/heroes';
import { PostgresConfiguration } from '@heroes-app/api/utils-config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApiFeatureConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfiguration
    }),
    ApiHeroesModule
  ],
  controllers: [],
})
export class AppModule {}
