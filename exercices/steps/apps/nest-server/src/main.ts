/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3333;
  app.setGlobalPrefix(globalPrefix);

  /** Enable cors */
  app.enableCors();

  /** Let to enable global validation pipe */
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  /** Creation of swagger */
  const swaggerConfiguration = new DocumentBuilder()
    .setTitle('Sfeir School Cypress Nest Server')
    .setDescription('Nest Server API Documentation')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfiguration);
  SwaggerModule.setup('api/documentation', app, swaggerDocument);

  await app.listen(port, () => {
    Logger.log('Server is running on http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
