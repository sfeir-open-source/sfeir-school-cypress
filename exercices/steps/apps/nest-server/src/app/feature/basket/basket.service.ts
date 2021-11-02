import { ReaderFileService } from '@nest-server/app/core/providers/reader-file.service';
import { BasketItem } from '@nest-server/app/shared/models/basket.model';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class BasketService {
  constructor(private readonly readerFileService: ReaderFileService) {}

  async readBasket(): Promise<Array<BasketItem> | InternalServerErrorException> {
    try {
      const data: string = (await this.readerFileService.readFile(
        join(__dirname, 'assets/mocks', 'basket.json')
      )) as string;
      const parsedData = JSON.parse(data) as Array<BasketItem>;
      return parsedData;
    } catch (error) {
      throw error;
    }
  }

  async writeBasket(data: Array<BasketItem>): Promise<Array<BasketItem> | InternalServerErrorException> {
    try {
      await this.readerFileService.writeFile(join(__dirname, 'assets/mocks', 'basket.json'), JSON.stringify(data));
      return await this.readBasket();
    } catch (error) {
      throw error;
    }
  }
}
