import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Express } from 'express';
import * as express from 'express';
import * as fs from 'fs';
import { join } from 'path';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';
import * as https from 'https';
import { ValidationPipe } from '@nestjs/common';
import { successInterceptor } from './interceptor/success.interceptor';

async function bootstrap() {
  const server: Express = express();
  const httpsOptions = {
    ca: fs
      .readFileSync(join(__dirname, '..', `keys/huikangh.com.cn_chain.crt`))
      .toString(),
    key: fs
      .readFileSync(join(__dirname, '..', `keys/huikangh.com.cn.key`))
      .toString(),
    cert: fs
      .readFileSync(join(__dirname, '..', `keys/huikangh.com.cn_public.crt`))
      .toString(),
  };
  const app: NestApplication = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );
  app.useGlobalInterceptors(new successInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  http.createServer(server).listen(80);
  https.createServer(httpsOptions, server).listen(443);
}
bootstrap();
