import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/auth/schemas/user.schema';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService, private readonly authService: AuthService) { }

  @Post('/addtask/:id')
  async createTask(@Body() body: CreateTaskDto, @Param('id') id: string) {
    return this.taskService.createTask(body, id)

  }


  @Get('/gettasks/:id')
  async findAllTasks(@Param('id') id: string) {
    return this.taskService.findAllTasks(id)
  }

  @Delete('deletetask/:id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id)
  }


  // @UseGuards(AuthGuard)
  // @Post('/addtask')
  // async createTask(@Body() body: CreateTaskDto,
  //   @CurrentUser() user) {

  //   return this.taskService.createTask(body, user._id)

  // }


  // @UseGuards(AuthGuard)
  // @Get('/gettasks')
  // async findAllTasks(@CurrentUser() user: any) {
  //   return this.taskService.findAllTasks(user._id)
  // }

}
