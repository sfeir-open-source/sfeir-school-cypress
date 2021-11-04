import { Module } from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { BasketController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [],
  controllers: [BasketController],
  providers: [CartService, BooksService],
})
export class CartModule {}
