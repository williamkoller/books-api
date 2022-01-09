import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from '@/modules/books/repositories/books.repository';
import { MessageOutputType } from '@/utils/types/message/message-output.type';
import { LoadBookByIdService } from '@/modules/books/services/load-book-by-id/load-book-by-id.service';

@Injectable()
export class DeleteBookService {
  constructor(
    private readonly booksRepo: BooksRepository,
    private readonly loadBookByIdService: LoadBookByIdService,
  ) {}

  public async delete(id: string): Promise<MessageOutputType> {
    const { id: bookId } = await this.loadBookByIdService.loadBookById(id);

    await this.booksRepo.deleteBook(bookId);

    return {
      message: 'the book was successfully deleted.',
    };
  }
}
