import { Module } from '@nestjs/common';
import { PaginatorService } from './paginator.service';
import { ReaderFileService } from './reader-file.service';

@Module({
  providers: [PaginatorService, ReaderFileService],
  exports: [PaginatorService, ReaderFileService],
})
export class ProvidersModule {}
