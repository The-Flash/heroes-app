import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHeroDto } from '../dto/create-hero.dto';
import { Hero } from '../entities/hero.entity';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero) private heroRepository: Repository<Hero>
  ) {}

  findAll(): Promise<Hero[]> {
    return this.heroRepository.find();
  }

  findOne(id: string): Promise<Hero> {
    return this.heroRepository.findOneBy({
      id: +id
    });
  }

  async create(data: CreateHeroDto) {
    let hero = this.heroRepository.create(data);
    hero = await this.heroRepository.save(hero);
    return hero;
  }

  async destroy(id: string) {
    await this.heroRepository.delete(id);
  }

  async update(id: string, data: CreateHeroDto) {
    let hero = await this.heroRepository.findOneBy({
      id: +id,
    });
    this.heroRepository.merge(hero, data);
    hero = await this.heroRepository.save(hero);
    return hero;
  }
}
