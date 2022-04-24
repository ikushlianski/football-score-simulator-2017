import { Controller, Get } from '@nestjs/common';
import { SquadsService } from './squads.service';

@Controller()
export class SquadsController {
  constructor(private readonly squadsService: SquadsService) {}

  @Get()
  getHello(): string {
    return this.squadsService.getHello();
  }
}
