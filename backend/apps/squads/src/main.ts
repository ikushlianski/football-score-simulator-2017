import { NestFactory } from '@nestjs/core';
import { SquadsModule } from './squads.module';

async function bootstrap() {
  const app = await NestFactory.create(SquadsModule);
  await app.listen(3000);
}
bootstrap();
