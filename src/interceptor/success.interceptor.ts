import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Data<T> {
  data: T;
}

@Injectable()
export class successInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(
      map((data) => {
        context.switchToHttp().getResponse().status(HttpStatus.OK);
        return {
          data, // data即为 Service层或者Controller层的返回值
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: '请求成功',
          time: Date.now(),
        };
      }),
    );
  }
}
