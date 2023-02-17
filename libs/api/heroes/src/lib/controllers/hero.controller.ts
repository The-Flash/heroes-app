import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateHeroDto } from '../dto/create-hero.dto';
import { HeroService } from '../services/hero.service';

@Controller('heroes')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get()
  findAll() {
    return this.heroService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const hero = await this.heroService.findOne(id);
    return hero;
  }

  @Post()
  async createHero(@Body() createHeroDto: CreateHeroDto) {
    const hero = await this.heroService.create(createHeroDto);
    return hero;
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    await this.heroService.destroy(id);
    return 'deleted';
  }

  @Put(':id')
  async updateHero(
    @Param('id') id: string,
    @Body() updateHeroDto: CreateHeroDto
  ) {
    const hero = await this.heroService.update(id, updateHeroDto);
    return hero;
  }
}
