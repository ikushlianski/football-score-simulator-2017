import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';

@Module({
  imports: [],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}
