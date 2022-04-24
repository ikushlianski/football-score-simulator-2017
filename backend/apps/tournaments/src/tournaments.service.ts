import { Injectable } from '@nestjs/common';

@Injectable()
export class TournamentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
