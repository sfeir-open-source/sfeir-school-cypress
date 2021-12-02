import { Cart, BookCartItem } from '@nest-server/app/shared/models/cart.model';
import { Injectable } from '@nestjs/common';
import { BooksService } from '../books/books.service';

@Injectable()
export class CartMapperService {
  constructor(private readonly booksService: BooksService) {}

  async toCartItems(cart: Cart): Promise<BookCartItem[]> {
    return this.booksService.getAll(Object.keys(cart)).map(book => ({
      book,
      quantity: cart[book.id].quantity,
      price: cart[book.id].price,
    }));
  }
}
