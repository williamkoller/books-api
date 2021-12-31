import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';

export interface LoadBookByTitleRepository {
  loadByTitle: (title: string) => Promise<BookEntity>;
}
