import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';

export interface LoadBookByIdRepository {
  loadBookById: (id: string) => Promise<BookEntity>;
}
