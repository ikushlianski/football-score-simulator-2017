import { Injectable } from '@nestjs/common';

@Injectable()
export class SquadsService {
  getHello(): string {
    return 'Hello World!';
  }
}
