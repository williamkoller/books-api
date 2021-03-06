import {
  AddBookRepository,
  LoadBookByTitleRepository,
  LoadAllBooksRepository,
  DeleteBookRepository,
  LoadBookByIdRepository,
} from '@/data/protocols/db/books';
import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddBookDto } from '@/modules/books/dtos/add-book/add-book.dto';

@EntityRepository(BookEntity)
export class BooksRepository
  extends Repository<BookEntity>
  implements
    AddBookRepository,
    LoadBookByTitleRepository,
    LoadAllBooksRepository,
    DeleteBookRepository,
    LoadBookByIdRepository
{
  public async addBook(addBookDto: AddBookDto): Promise<BookEntity> {
    const newBook = Object.assign({} as AddBookDto, addBookDto);
    return await this.save(newBook);
  }

  public async loadBookById(id: string): Promise<BookEntity> {
    return await this.findOne({ where: { id } });
  }

  public async loadByTitle(title: string): Promise<BookEntity> {
    return await this.createQueryBuilder('books')
      .where(`(title) ILIKE :title`, { title: `%${title}%` })
      .getOne();
  }

  public async loadAllBooks(): Promise<BookEntity[]> {
    return await this.find({ relations: ['category'] });
  }

  public async deleteBook(id: string): Promise<void> {
    await this.delete(id);
  }
}
