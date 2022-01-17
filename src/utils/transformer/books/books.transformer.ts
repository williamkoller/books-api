import { BookEntity } from '@/infra/typeorm/entities/book-entity/book.entity';
import { BooksTypeOutput } from '@/utils/types/books/books.type';

export const booksTransformers = (books: BookEntity[]): BooksTypeOutput[] => {
  return books.map((book) => ({
    id: book.id,
    author: book.author,
    title: book.title,
    state: book.state,
    price: book.price,
    pages: book.pages,
    release_year: book.release_year,
    publishing_company: book.publishing_company,
    category: book.category,
    created_at: book.created_at,
    updated_at: book.updated_at,
  }));
};

export const bookTransformer = (book: BookEntity): BooksTypeOutput => {
  return {
    id: book.id,
    author: book.author,
    title: book.title,
    state: book.state,
    price: book.price,
    pages: book.pages,
    release_year: book.release_year,
    publishing_company: book.publishing_company,
    category: book.category,
    created_at: book.created_at,
    updated_at: book.updated_at,
  };
};
