import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { SignUpDto } from './dtos/signup.dto';
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>
  ) { }


  async signUp(signUpDto: SignUpDto) {
    const { name, email, password } = signUpDto;
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
      const user = await this.UserModel.create({
        name,
        email,
        password: hashedPassword
      })
      return user._id;
    }
    catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
        throw new ConflictException('Email is already in use');
      }
      // If it's not a duplicate key error, rethrow the original error
      throw error;
    }


  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto
    const user = await this.UserModel.findOne({ email })
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) {
      throw new UnauthorizedException('invalid credentials')
    }
    return { name: user.name, _id: user._id }
  }

  //find user by id
  async findOne(id) {
    const user = await this.UserModel.findById(id);
    if (!user) {
      return null
    }
    return user
  }



}
