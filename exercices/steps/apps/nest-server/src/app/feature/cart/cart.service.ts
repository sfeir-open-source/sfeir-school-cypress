import { ReaderFileService } from '@nest-server/app/core/providers/reader-file.service';
import { CartItem } from '@nest-server/app/shared/models/basket.model';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class CartService {
  constructor(private readonly readerFileService: ReaderFileService) {}

  async readBasket(): Promise<Array<CartItem> | InternalServerErrorException> {
    try {
      const data: string = (await this.readerFileService.readFile(
        join(__dirname, 'assets/mocks', 'cart.json')
      )) as string;
      const parsedData = JSON.parse(data) as Array<CartItem>;
      return parsedData;
    } catch (error) {
      throw error;
    }
  }

  async writeBasket(data: Array<CartItem>): Promise<Array<CartItem> | InternalServerErrorException> {
    try {
      await this.readerFileService.writeFile(join(__dirname, 'assets/mocks', 'cart.json'), JSON.stringify(data));
      return await this.readBasket();
    } catch (error) {
      throw error;
    }
  }
}
