import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class ReaderFileService {
  async readFile(filePath: string): Promise<string | InternalServerErrorException> {
    try {
      return await readFile(filePath, 'utf8');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async writeFile(filePath: string, data: string): Promise<void | InternalServerErrorException> {
    try {
      return await writeFile(filePath, data, 'utf8');
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
