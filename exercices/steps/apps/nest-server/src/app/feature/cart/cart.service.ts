import { ReaderFileService } from '@nest-server/app/core/providers/reader-file.service';
import { Cart, CartItem } from '@nest-server/app/shared/models/cart.model';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class CartService {
  constructor(private readonly readerFileService: ReaderFileService) {}

  async readBasket(): Promise<Cart> {
    const data: string = (await this.readerFileService.readFile(
      join(__dirname, 'assets/mocks', 'cart.json')
    )) as string;
    const parsedData = JSON.parse(data) as Cart;

    return parsedData;
  }

  async writeItem(item: CartItem): Promise<Cart> {
    const oldCart = await this.readBasket();

    const newCart = {
      ...oldCart,
      [item.bookId]: item,
    };

    this.writeBasket(newCart);

    return newCart;
  }

  async writeBasket(data: Cart): Promise<Cart> {
    await this.readerFileService.writeFile(join(__dirname, 'assets/mocks', 'cart.json'), JSON.stringify(data));
    return data;
  }

  async deleteBasket() {
    await this.readerFileService.writeFile(join(__dirname, 'assets/mocks', 'cart.json'), JSON.stringify({}));
  }
}
