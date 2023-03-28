import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix: string = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['POST', 'GET'],
    allowedHeaders: ['content-type'],
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
