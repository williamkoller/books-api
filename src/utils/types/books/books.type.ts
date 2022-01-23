import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';

export type BooksTypeOutput = {
  id: string;
  author: string;
  title: string;
  state: string;
  price: number;
  pages: number;
  release_year: number;
  publishing_company: string;
  category: CategoryEntity;
  created_at: Date;
  updated_at: Date;
};
