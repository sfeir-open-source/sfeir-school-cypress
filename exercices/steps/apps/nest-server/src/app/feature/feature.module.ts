import { Module } from '@nestjs/common';
import { BasketModule } from './basket/basket.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, UserModule, BasketModule],
  exports: [BooksModule, UserModule, BasketModule],
})
export class FeatureModule {}
