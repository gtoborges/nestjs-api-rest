import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFoundError, InternalError } from 'src/errors';

@Catch(NotFoundError)
export class NotFoundErrorFilter implements ExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(404).json({
      status: 404,
      message: exception.message,
    });
  }
}

@Catch(InternalError)
export class InternalErrorFilter implements ExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(500).json({
      status: 500,
      message: exception.message,
    });
  }
}
