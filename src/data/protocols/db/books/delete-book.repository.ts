export interface DeleteBookRepository {
  deleteBook: (id: string) => Promise<void>;
}
