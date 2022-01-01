import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { swaggerConfig } from './docs/swagger-config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<string>('port');
  const nodeEnv = config.get<string>('nodeEnv');

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  swaggerConfig(app);

  await app.listen(port, () =>
    logger.log(`server is running in ${nodeEnv} mode`),
  );
}
bootstrap();
