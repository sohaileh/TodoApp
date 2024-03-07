
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private authService: AuthService) {

  }



  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session || {};

    if (userId) {
      const user = await this.authService.findOne(userId)

      request.currentUser = user;
    }


    return next.handle();
  }
}
