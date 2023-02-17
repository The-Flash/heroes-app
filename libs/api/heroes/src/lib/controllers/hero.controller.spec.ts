import { Test } from '@nestjs/testing';
import { HeroService } from '../services/hero.service';
import { HeroController } from '../controllers/hero.controller';

const mockHeroService = {
  findAll() {
    return Promise.resolve([]);
  },
};

describe('Hero Controller', () => {
  let heroController: HeroController;
  let heroService: HeroService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [
        {
          provide: HeroService,
          useValue: mockHeroService,
        },
      ],
    }).compile();
    heroController = moduleRef.get<HeroController>(HeroController);
    heroService = moduleRef.get<HeroService>(HeroService);
  });
  it('should return an empty array', async () => {
    expect(await heroController.findAll()).toStrictEqual([]);
  });
});
