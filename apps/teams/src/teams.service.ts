import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  getHello(): string {
    return 'Hello World!';
  }
}
