import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  exports: [BooksModule],
})
export class FeatureModule {}
