import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";




export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly content: string

  @IsEmpty({ message: "You cannot pass user id" })
  readonly user: User


}