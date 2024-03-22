import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}



export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string

  @IsNotEmpty()
  @IsString()
  readonly lastName: string


  @IsNotEmpty()
  @IsEmail({}, { message: "please enter correct email" })
  readonly email: string


  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string

  @IsNotEmpty()
  @IsNumber()
  phoneNumber: number;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'Gender must be either "male" or "female"',
  })
  gender: Gender;


}