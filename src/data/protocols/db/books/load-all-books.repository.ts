import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';

export interface LoadAllBooksRepository {
  loadAllBooks: () => Promise<BookEntity[]>;
}
