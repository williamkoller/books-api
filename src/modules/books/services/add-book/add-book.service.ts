import { ConflictException, Injectable } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';
import { AddBookDto } from '../../dtos/add-book/add-book.dto';
import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';

@Injectable()
export class AddBookService {
  constructor(private readonly BooksRepo: BooksRepository) {}

  public async addBook(addBookDto: AddBookDto): Promise<BookEntity> {
    const bookExists = await this.BooksRepo.loadByTitle(addBookDto.title);

    if (bookExists) {
      throw new ConflictException('Book Already exists.');
    }

    return await this.BooksRepo.addBook(addBookDto);
  }
}
