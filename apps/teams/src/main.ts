import { NestFactory } from '@nestjs/core';
import { TeamsModule } from './teams.module';

async function bootstrap() {
  const app = await NestFactory.create(TeamsModule);
  await app.listen(3000);
}
bootstrap();
