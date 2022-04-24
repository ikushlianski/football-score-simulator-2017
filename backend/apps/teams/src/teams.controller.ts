import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller()
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getHello(): string {
    return this.teamsService.getHello();
  }
}
