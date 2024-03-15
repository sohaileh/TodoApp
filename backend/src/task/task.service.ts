import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name)
  private taskModel: Model<Task>) { }

  async createTask(task: Task, userId: string) {
    const isValidId = mongoose.isValidObjectId(userId)
    if (!isValidId) {
      throw new BadRequestException('please enter valid id')
    }
    const data = Object.assign(task, { user: userId })
    const res = await this.taskModel.create(data)
    return res;
  }

  async findAllTasks(id: string) {
    const isValidId = mongoose.isValidObjectId(id)
    if (!isValidId) {
      throw new BadRequestException('please enter valid id')
    }
    const data = await this.taskModel.find({ user: id })
    if (!data) {
      throw new NotFoundException('user not found')
    }
    return data;
  }


  async deleteTask(id: string) {
    const isValidId = mongoose.isValidObjectId(id)
    if (!isValidId) {
      throw new BadRequestException("invalid id");
    }
    const data = await this.taskModel.findById(id);
    if (!data) {
      throw new NotFoundException('task not found')
    }
    else {
      return await this.taskModel.deleteOne({ _id: id })
    }
  }

}
