import { Book } from '@nest-server/app/shared/models/book.model';
import { Genre } from '@nest-server/app/shared/models/genre.model';
import { Paginator } from '@nest-server/app/shared/models/paginator.model';
import { Controller, Get, HttpCode, ParseIntPipe, Query, UnprocessableEntityException } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
    @Query('genre') genre: string
  ): Paginator<Book> | UnprocessableEntityException {
    const genres: string[] = genre?.split(',') || [];

    return this.booksService.getBooks(genres, page, pageSize);
  }

  @Get('top10')
  @HttpCode(200)
  getTop10() {
    return this.booksService.getTop10();
  }

  @Get('genres')
  @HttpCode(200)
  getGenres(): Array<Genre> {
    return this.booksService.getGenres();
  }
}
