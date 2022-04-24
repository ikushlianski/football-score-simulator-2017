import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

describe('TeamsController', () => {
  let teamsController: TeamsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    }).compile();

    teamsController = app.get<TeamsController>(TeamsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(teamsController.getHello()).toBe('Hello World!');
    });
  });
});
