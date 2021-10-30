import { Paginator } from '@nest-server/app/shared/models/paginator.model';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class PaginatorService {
  pagination<T>(entity: Array<T>, page: number, pageSize: number): Paginator<T> {
    const entityLength = entity.length;

    const entityPaginated = entity.slice(page * pageSize - pageSize, page * pageSize);

    if (page * pageSize - pageSize > entityLength) {
      throw new UnprocessableEntityException();
    }

    return {
      page,
      itemsPerPage: pageSize,
      isFirst: page === 1,
      isLast: page * pageSize >= entityLength,
      content: entityPaginated,
    };
  }
}
