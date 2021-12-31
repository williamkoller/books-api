import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddBookDto } from '../dtos/add-book/add-book.dto';
import { AddBookService } from '../services/add-book/add-book.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly addBookService: AddBookService) {}

  @Post()
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
}
