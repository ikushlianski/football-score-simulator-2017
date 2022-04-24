import { Test, TestingModule } from '@nestjs/testing';
import { SquadsController } from './squads.controller';
import { SquadsService } from './squads.service';

describe('SquadsController', () => {
  let squadsController: SquadsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SquadsController],
      providers: [SquadsService],
    }).compile();

    squadsController = app.get<SquadsController>(SquadsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(squadsController.getHello()).toBe('Hello World!');
    });
  });
});
