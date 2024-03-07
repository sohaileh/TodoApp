import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';
import { AuthService } from 'src/auth/auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from 'src/auth/interceptors/current-user.interceptor';

@Module({
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  providers: [TaskService, {
    provide: APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor
  }],
  controllers: [TaskController]
})
export class TaskModule { }
