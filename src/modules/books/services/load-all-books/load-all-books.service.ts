import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { booksTransformers } from '@/utils/transformer/books/books.transformer';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';

@Injectable()
export class LoadAllBooksService {
  constructor(private readonly booksRepo: BooksRepository) {}

  public async loadAllBooks(): Promise<BookEntity[]> {
    const books = await this.booksRepo.loadAllBooks();

    if (!books.length) {
      throw new NotFoundException('no record found.');
    }

    return booksTransformers(books);
  }
}
