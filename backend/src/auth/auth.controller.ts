import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('/signup')
  async signUp(@Body() data: SignUpDto, @Session() session: any) {

    const user = await this.authService.signUp(data)
    session.userId = user;

    return user;
  }

  @Post('/login')
  async login(@Body() data: LoginDto, @Session() session: any) {
    const user = await this.authService.login(data)
    session.userId = user._id
    return user

  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }


}
