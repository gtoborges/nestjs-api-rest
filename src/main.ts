import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalErrorFilter, NotFoundErrorFilter } from './not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new NotFoundErrorFilter(), new InternalErrorFilter());

  await app.listen(3000);
}
bootstrap();
