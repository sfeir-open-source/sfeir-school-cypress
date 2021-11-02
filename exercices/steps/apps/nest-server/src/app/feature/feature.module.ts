import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, UserModule, CartModule],
  exports: [BooksModule, UserModule, CartModule],
})
export class FeatureModule {}
