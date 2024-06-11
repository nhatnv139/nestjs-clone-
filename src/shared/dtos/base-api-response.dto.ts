import { ApiProperty } from '@nestjs/swagger';

export class BaseApiResponse<T> {
  public data: T; // Swagger Decorator is added in the extended class below, since that will override this one.

  @ApiProperty({ type: Object })
  public meta: any;

  @ApiProperty({ type: String })
  public message?: string;
}

export class PaginateResponse<T> {
  @ApiProperty({ type: Array })
  public edges: Array<{
    node: T,
    cursor: string
  }>;

  @ApiProperty({ type: Object })
  public pageInfo: {
    startCursor: string,
    endCursor: string,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
  };
}

export function SwaggerBaseApiResponse<T>(type: T): typeof BaseApiResponse {
  class ExtendedBaseApiResponse<T> extends BaseApiResponse<T> {
    @ApiProperty({ type })
    public data: T;
  }
  // NOTE : Overwrite the returned class name, otherwise whichever type calls this function in the last,
  // will overwrite all previous definitions. i.e., Swagger will have all response types as the same one.
  const isAnArray = Array.isArray(type) ? ' [ ] ' : '';
  Object.defineProperty(ExtendedBaseApiResponse, 'name', {
    value: `SwaggerBaseApiResponseFor ${type} ${isAnArray}`,
  });

  return ExtendedBaseApiResponse;
}

export class BaseApiErrorObject {
  @ApiProperty({ type: Number })
  public statusCode: number;

  @ApiProperty({ type: String })
  public message: string;

  @ApiProperty({ type: String })
  public errorName: string;

  @ApiProperty({ type: String })
  public path: string;

  @ApiProperty({ type: String })
  public requestId: string;

  @ApiProperty({ type: String })
  public timestamp: string;
}

export class BaseApiErrorResponse {
  @ApiProperty({ type: BaseApiErrorObject })
  public error: BaseApiErrorObject;
}
