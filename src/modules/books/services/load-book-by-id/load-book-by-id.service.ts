import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';
import { bookTransformer } from '@/utils/transformer/books/books.transformer';
import { BooksTypeOutput } from '@/utils/types/books/books.type';

@Injectable()
export class LoadBookByIdService {
  constructor(private readonly booksRepo: BooksRepository) {}

  public async loadBookById(id: string): Promise<BooksTypeOutput> {
    const bookFound = await this.booksRepo.loadBookById(id);

    if (!bookFound) {
      throw new NotFoundException('the book not found.');
    }

    return bookTransformer(bookFound);
  }
}
