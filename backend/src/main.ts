import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { filterGeral } from './filter/filterGeral';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Registrando seu filtro
  app.useGlobalFilters(new filterGeral())

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
