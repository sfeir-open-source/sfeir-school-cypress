import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BasketItemDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bookId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bookName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}