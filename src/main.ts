import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { TransformInterceptor } from './section/transform/transform.interceptor';
import { ValidationPipe } from './section/validation/validation.pipe';
import { ExceptionsFilter } from './section/errors/errors.filter';

export const IS_DEV = process.env.NODE_ENV !== 'prob';
const PORT = process.env.PORT || 8080;
const PREFIX = process.env.PREFIX || '/';
async function bootstrap() {
  const logger: Logger = new Logger('main.ts');
  const app = await NestFactory.create(AppModule, {
    /**
     *日志级别
     */
    logger: IS_DEV ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn'],
  });

  /**
   * swagger 配置
   */
  const options = new DocumentBuilder()
    .setTitle('环物全景后台')
    .setDescription('环物全景后台')
    .setVersion('1.0')
    .addTag('pano')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(PREFIX, app, document);
  /**
   * response 拦截器
   */
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  /**
   * begin
   */
  await app.listen(PORT, () => {
    logger.log(
      `\n========服务已经启动,接口请访问: =========\n
      http://wwww.localhost:${PORT}/${PREFIX}`,
    );
  });
}
bootstrap();
