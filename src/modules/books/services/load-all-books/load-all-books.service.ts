import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { booksTransformers } from '@/utils/transformer/books/books.transformer';
import { Injectable } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';

@Injectable()
export class LoadAllBooksService {
  constructor(private readonly booksRepo: BooksRepository) {}

  public async loadAllBooks(): Promise<BookEntity[]> {
    const books = await this.booksRepo.loadAllBooks();
    return booksTransformers(books);
  }
}
