import {
  ArgumentsHost,
  Catch,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

import { REQUEST_ID_TOKEN_HEADER } from '../constants';
import { BaseApiException } from '../exceptions/base-api.exception';
import { AppLogger } from '../logger/logger.service';
import { createRequestContext } from '../request-context/util';
import { formatI18nErrors } from '../util';
import {
  I18nContext,
  I18nValidationException,
  I18nValidationExceptionFilter,
  I18nValidationError,
} from 'nestjs-i18n';
@Catch()
export class AllExceptionsFilter<T> extends I18nValidationExceptionFilter {
  /** set logger context */
  constructor(
    private config: ConfigService,
    @Inject(forwardRef(() => AppLogger))
    private readonly logger: AppLogger,
  ) {
    super();
    this.logger.setContext(AllExceptionsFilter.name);
  }

  catch(exception: I18nValidationException | T, host: ArgumentsHost): any {
    // @ts-ignore
    const ctx = host.switchToHttp();
    const req: Request = ctx.getRequest<Request>();
    const res: Response = ctx.getResponse<Response>();

    const path = req.url;
    const timestamp = new Date();
    const requestId = req.headers[REQUEST_ID_TOKEN_HEADER];
    const requestContext = createRequestContext(req);

    let stack: any;
    let statusCode: HttpStatus;
    let errorName: string;
    let message: string;

    const i18n = I18nContext.current();
    console.log(exception);
    if (exception instanceof I18nValidationException) {
      let errors = formatI18nErrors(exception.errors ?? [], i18n.service, {
        lang: i18n.lang,
      });
      switch (host.getType() as string) {
        case 'http':
          // @ts-ignore
          errors = this.normalizeValidationErrors(errors);
          break;
        case 'graphql':
          // @ts-ignore
          errors = this.normalizeValidationErrors(
            errors,
          ) as I18nValidationError[];
      }
      statusCode = exception.getStatus();
      errorName = exception.constructor.name;
      message = this.flattenValidationErrors(errors)
        .map((error) => error.replace(/^\w/, (c) => c.toUpperCase()))
        .join('\n');
    } else if (exception instanceof UnauthorizedException) {
      statusCode = exception.getStatus();
      errorName = exception.constructor.name;
      message = exception.message || i18n.t('common.auth.unauthorized');
      if (message === 'TokenExpiredError: jwt expired') {
        message = i18n.t('common.auth.unauthorized');
      }
    } else if (exception instanceof BaseApiException) {
      statusCode = exception.getStatus();
      errorName = exception.constructor.name;
      message =
        exception.message ||
        exception.getResponse()[0] ||
        exception.getResponse();
    } else if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      errorName = exception.constructor.name;
      message =
        exception.message ||
        exception.getResponse()[0] ||
        exception.getResponse();
    } else if (exception instanceof Error) {
      errorName = exception.constructor.name;
      message = exception.message;
      stack = exception.stack;

      // Suppress original internal server error details in prod mode
      const isProMood = this.config.get<string>('env') !== 'development';
      if (isProMood) {
        message = i18n.t('common.app.internal_exception');
        errorName = 'Error';
      }
    }
    statusCode = statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    errorName = errorName || 'InternalException';
    message = message || i18n.t('common.app.internal_exception');

    const error = {
      statusCode,
      message,
      errorName,
      path,
      requestId,
      timestamp,
    };
    this.logger.warn(requestContext, error.message, {
      error,
      stack,
    });

    res.status(statusCode).json({ error });
  }
}
