import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



@Schema({
  timestamps: true
})
export class User {
  @Prop()
  firstName: string

  @Prop()
  lastName: string

  @Prop({ unique: [true, 'duplicate email entered'] })
  email: string

  @Prop()
  password: string

  @Prop()
  phoneNumber: number

  @Prop()
  gender: string;

}

export const UserSchema = SchemaFactory.createForClass(User);