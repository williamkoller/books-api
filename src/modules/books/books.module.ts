import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books.controller';
import { BooksRepository } from './repositories/books.repository';
import { AddBookService } from './services/add-book/add-book.service';
import { DeleteBookService } from './services/delete-book/delete-book.service';
import { LoadAllBooksService } from './services/load-all-books/load-all-books.service';
import { LoadBookByIdService } from './services/load-book-by-id/load-book-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BooksRepository])],
  providers: [
    AddBookService,
    LoadAllBooksService,
    DeleteBookService,
    LoadBookByIdService,
  ],
  controllers: [BooksController],
})
export class BooksModule {}
