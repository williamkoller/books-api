import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddBookDto } from '@/modules/books/dtos/add-book/add-book.dto';
import { AddBookService } from '@/modules/books/services/add-book/add-book.service';
import { LoadAllBooksService } from '@/modules/books/services/load-all-books/load-all-books.service';
import { DeleteBookService } from '@/modules/books/services/delete-book/delete-book.service';
import { MessageOutputType } from '@/utils/types/message/message-output.type';
import { LoadBookByIdService } from '@/modules/books/services/load-book-by-id/load-book-by-id.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(
    private readonly addBookService: AddBookService,
    private readonly loadAllBooksService: LoadAllBooksService,
    private readonly deleteBookService: DeleteBookService,
    private readonly loadBookByIdService: LoadBookByIdService,
  ) {}

  @Post('add-book')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'add new book.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'title past request is already in use.',
  })
  public async add(@Body() addBookDto: AddBookDto): Promise<BookEntity> {
    return await this.addBookService.addBook(addBookDto);
  }

  @Get('load-all')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'load all books.',
  })
  public async loadAll(): Promise<BookEntity[]> {
    return await this.loadAllBooksService.loadAllBooks();
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'the book not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'the book was successfully deleted.',
  })
  public async deleteBook(@Param('id') id: string): Promise<MessageOutputType> {
    return await this.deleteBookService.delete(id);
  }

  @Get('load-by-id/:id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'the book not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'the book was successfully deleted.',
  })
  public async loadById(@Param('id') id: string): Promise<BookEntity> {
    return await this.loadBookByIdService.loadBookById(id);
  }
}
