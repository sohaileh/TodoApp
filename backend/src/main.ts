import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const cookieSession = require('cookie-session')
const PORT = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['myKey123']
  }))
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(PORT);
  console.log(`Server is listening on port : ${PORT}`)
}
bootstrap();
