import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroController } from './controllers/hero.controller';
import { Hero } from './entities/hero.entity';
import { HeroService } from './services/hero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  controllers: [HeroController],
  providers: [HeroService],
  exports: [TypeOrmModule],
})
export class ApiHeroesModule {}
