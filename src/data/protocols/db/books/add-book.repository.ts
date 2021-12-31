import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { AddBookDto } from '@/modules/books/dtos/add-book/add-book.dto'

export interface AddBookRepository {
  addBook: (addBookDto: AddBookDto) => Promise<BookEntity>;
}
