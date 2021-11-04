import { PaginatorService } from '@nest-server/app/core/providers/paginator.service';
import { Book } from '@nest-server/app/shared/models/book.model';
import { Genre } from '@nest-server/app/shared/models/genre.model';
import { Paginator } from '@nest-server/app/shared/models/paginator.model';
import listBooks from '@nest-server/assets/mocks/books.json';
import genres from '@nest-server/assets/mocks/genre.json';
import top10 from '@nest-server/assets/mocks/top10.json';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class BooksService {
  getAll(ids: string[]): Book[] {
    const keys = ids.reduce((map, id) => {
      map[id] = true;
      return map;
    }, {});
   
   return listBooks.filter(b => !!keys[b.id]);
  }

  constructor(private readonly paginatorService: PaginatorService) {}

  getBooks(genre: string[], page: number, limit: number): Paginator<Book> | UnprocessableEntityException {
    let books = listBooks;
    if (genre.length > 0) {
      books = books.filter(book => genre.includes(book.genreId));
    }
    return this.paginatorService.pagination(books, page, limit);
  }

  getGenres(): Array<Genre> {
    return genres;
  }

  getTop10(): Array<Book> {
    return top10;
  }
}
