import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books.controller';
import { BooksRepository } from './repositories/books.repository';
import { AddBookService } from './services/add-book/add-book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BooksRepository])],
  providers: [AddBookService],
  controllers: [BooksController],
})
export class BooksModule {}
