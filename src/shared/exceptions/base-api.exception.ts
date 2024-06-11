import { HttpException } from '@nestjs/common';

export class BaseApiException extends HttpException {
  constructor(
    message: string,
    status: number,
  ) {
    // Calling parent constructor of base Exception class.
    super(message, status);
    this.name = BaseApiException.name;
  }
}
