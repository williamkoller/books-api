import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';
import { MessageOutputType } from '@/utils/types/message/message-output.type';

@Injectable()
export class DeleteBookService {
  constructor(private readonly booksRepo: BooksRepository) {}

  public async delete(bookId: string): Promise<MessageOutputType> {
    const book = await this.booksRepo.loadBookById(bookId);

    if (!book) {
      throw new NotFoundException('the book not found.');
    }

    const { id } = book;

    await this.booksRepo.deleteBook(id);

    return {
      message: 'the book was successfully deleted.',
    };
  }
}
