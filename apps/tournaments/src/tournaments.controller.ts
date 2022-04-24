import { Controller, Get } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller()
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  getHello(): string {
    return this.tournamentsService.getHello();
  }
}
