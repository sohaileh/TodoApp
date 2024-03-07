import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



@Schema({
  timestamps: true
})
export class User {
  @Prop()
  name: string

  @Prop({ unique: [true, 'duplicate email entered'] })
  email: string

  @Prop()
  password: string

}

export const UserSchema = SchemaFactory.createForClass(User);