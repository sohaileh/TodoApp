import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/TodoApp'), AuthModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
