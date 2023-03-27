import { Book, BOOK_SCHEMA } from '@nest-server/app/shared/models/book.model';
import { Genre, GENRE_SCHEMA } from '@nest-server/app/shared/models/genre.model';
import { Paginator } from '@nest-server/app/shared/models/paginator.model';
import { Controller, Get, HttpCode, ParseIntPipe, Query, UnprocessableEntityException } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'list of books',
    schema: {
      type: 'object',
      properties: {
        isFirst: { type: 'boolean' },
        isLast: { type: 'boolean' },
        page: { type: 'number' },
        itemsPerPage: { type: 'number' },
        content: { type: 'array', items: BOOK_SCHEMA },
      },
    },
  })
  @ApiQuery({ name: 'page', type: 'number', required: true, description: 'page number (begin to 1)' })
  @ApiQuery({ name: 'pageSize', type: 'number', required: true, description: 'items per page' })
  @ApiQuery({ name: 'genre', type: 'string', required: false, description: 'list of genre separated by comma' })
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
