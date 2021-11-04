import { CartItem } from '@nest-server/app/shared/models/basket.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CartDTO {
  @ApiProperty()
  @IsNotEmpty()
  books: CartItem[]

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total: number;
}
