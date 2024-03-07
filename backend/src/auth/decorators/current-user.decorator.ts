import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import * as request from 'supertest';


export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()

    return request.currentUser;
  }
)