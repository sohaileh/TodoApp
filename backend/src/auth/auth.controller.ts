import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto, @Session() session: any) {

    const user = await this.authService.signUp(signUpDto)
    session.userId = user;

    return user;
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Session() session: any) {
    const user = await this.authService.login(loginDto)
    session.userId = user._id
    return user

  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }


}
