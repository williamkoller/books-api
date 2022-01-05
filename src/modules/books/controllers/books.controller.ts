import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddBookDto } from '../dtos/add-book/add-book.dto';
import { AddBookService } from '../services/add-book/add-book.service';
import { LoadAllBooksService } from '../services/load-all-books/load-all-books.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(
    private readonly addBookService: AddBookService,
    private readonly loadAllBooksService: LoadAllBooksService,
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
}
