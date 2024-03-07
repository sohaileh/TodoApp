import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name)
  private taskModel: Model<Task>) { }

  async createTask(task: Task, userId: string) {
    const data = Object.assign(task, { user: userId })
    const res = await this.taskModel.create(data)
    return res;
  }

  async findAllTasks(id: string) {
    const data = await this.taskModel.find({ user: id })
    return data;
  }
}
