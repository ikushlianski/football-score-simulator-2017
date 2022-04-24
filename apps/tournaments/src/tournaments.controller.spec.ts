import { Test, TestingModule } from '@nestjs/testing';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';

describe('TournamentsController', () => {
  let tournamentsController: TournamentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TournamentsController],
      providers: [TournamentsService],
    }).compile();

    tournamentsController = app.get<TournamentsController>(TournamentsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tournamentsController.getHello()).toBe('Hello World!');
    });
  });
});
