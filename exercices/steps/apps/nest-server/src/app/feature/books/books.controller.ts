import { Book, BOOK_SCHEMA } from '@nest-server/app/shared/models/book.model';
import { Genre, GENRE_SCHEMA } from '@nest-server/app/shared/models/genre.model';
import { Paginator } from '@nest-server/app/shared/models/paginator.model';
import { Controller, Get, HttpCode, ParseIntPipe, Query, UnprocessableEntityException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOkResponse({ status: 200, description: 'list of books', schema: { type: 'array', items: BOOK_SCHEMA } })
  getBooks(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
    @Query('genre') genre: string
  ): Paginator<Book> | UnprocessableEntityException {
    const genres: string[] = genre?.split(',') || [];

    return this.booksService.getBooks(genres, page, pageSize);
  }

  @Get('top10')
  @ApiOkResponse({
    status: 200,
    description: 'Returns top ten books',
    schema: { type: 'array', items: BOOK_SCHEMA },
  })
  @HttpCode(200)
  getTop10() {
    return this.booksService.getTop10();
  }

  @Get('genres')
  @ApiOkResponse({
    status: 200,
    description: 'Returns books genres',
    schema: { type: 'array', items: GENRE_SCHEMA },
  })
  @HttpCode(200)
  getGenres(): Array<Genre> {
    return this.booksService.getGenres();
  }
}
