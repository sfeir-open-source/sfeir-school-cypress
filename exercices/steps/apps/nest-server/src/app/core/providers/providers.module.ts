import { Module } from '@nestjs/common';
import { PaginatorService } from './paginator.service';

@Module({
  providers: [PaginatorService],
  exports: [PaginatorService],
})
export class ProvidersModule {}
