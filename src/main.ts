import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VALIDATION_PIPE_OPTIONS } from './shared/constants';
import { RequestIdMiddleware } from './shared/middlewares/request-id/request-id.middleware';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { I18nValidationPipe } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  // global prefix
  const version = configService.get<string>('versionApi');
  app.setGlobalPrefix(`api/v${version}`);
  app.useGlobalPipes(new I18nValidationPipe(VALIDATION_PIPE_OPTIONS));
  app.use(RequestIdMiddleware);
  app.enableCors();
  app.useBodyParser('urlencoded', { extended: true });
  app.useBodyParser('json', { limit: '10mb' });

  /** Swagger configuration*/
  // const options = new DocumentBuilder()
  //     .setTitle('Ath API starter')
  //     .setDescription('Ath API description')
  //     .setVersion(version)
  //     .addBearerAuth()
  //     .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('swagger', app, document);

  const port = configService.get<number>('port');
  await app.listen(port);
}
bootstrap();
