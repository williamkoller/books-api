import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { AddCategoryDto } from '@/modules/categories/dtos/add-category/add-category.dto';

export interface AddCategoryRepository {
  addCategory: (addCategoryDto: AddCategoryDto) => Promise<CategoryEntity>;
}
