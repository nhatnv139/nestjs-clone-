import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {IsNumber, IsOptional, IsString, Min} from 'class-validator';

export class PaginationQuery {
  @ApiPropertyOptional({
    description: 'Optional, defaults 10',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  limit = 10;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  @IsOptional()
  after;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  @IsOptional()
  before;

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  @IsString()
  order: string[][] | string;

  @ApiPropertyOptional({
    type: Object,
  })
  filters;
}


export class PaginationPageQuery {
  @ApiPropertyOptional({
    description: 'Optional, defaults to 100',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  limit = 10;

  @ApiPropertyOptional({
    description: 'Optional, defaults to 0',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  offset = 0;

}

