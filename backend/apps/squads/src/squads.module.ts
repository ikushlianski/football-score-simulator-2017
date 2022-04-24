import { Module } from '@nestjs/common';
import { SquadsController } from './squads.controller';
import { SquadsService } from './squads.service';

@Module({
  imports: [],
  controllers: [SquadsController],
  providers: [SquadsService],
})
export class SquadsModule {}
