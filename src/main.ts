import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const fastifyOptions: any = {
    http2: true,
    http2SessionTimeout: 300,
//    https: {
//      allowHTTP1: true,
//    },
  };

  const fastifyAdapter = new FastifyAdapter(fastifyOptions);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );
  await app.listen(3000);
}
bootstrap();
