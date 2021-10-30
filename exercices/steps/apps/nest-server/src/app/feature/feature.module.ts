import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, UserModule],
  exports: [BooksModule, UserModule],
})
export class FeatureModule {}
