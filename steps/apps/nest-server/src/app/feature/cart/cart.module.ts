import { Module } from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { CartMapperService } from './cart-mapper.service';
import { BasketController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [],
  controllers: [BasketController],
  providers: [CartService, CartMapperService, BooksService],
})
export class CartModule {}
