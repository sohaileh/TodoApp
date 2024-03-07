import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';




@Schema({
  timestamps: true
})
export class Task {
  @Prop()
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  user: User

}

export const TaskSchema = SchemaFactory.createForClass(Task);