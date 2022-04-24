import { NestFactory } from '@nestjs/core';
import { TournamentsModule } from './tournaments.module';

async function bootstrap() {
  const app = await NestFactory.create(TournamentsModule);
  await app.listen(3000);
}
bootstrap();
