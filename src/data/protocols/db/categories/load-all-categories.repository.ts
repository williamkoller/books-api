import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';

export interface LoadAllCategoriesRepository {
  loadAllCategories: () => Promise<CategoryEntity[]>;
}
