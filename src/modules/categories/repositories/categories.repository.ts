import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  AddCategoryRepository,
  LoadAllCategoriesRepository,
} from '@/data/protocols/db/categories';
import { AddCategoryDto } from '@/modules/categories/dtos/add-category/add-category.dto';

@EntityRepository(CategoryEntity)
export class CategoriesRepository
  extends Repository<CategoryEntity>
  implements AddCategoryRepository, LoadAllCategoriesRepository
{
  public async addCategory(
    addCategoryDto: AddCategoryDto,
  ): Promise<CategoryEntity> {
    const newCategory = Object.assign({} as AddCategoryDto, addCategoryDto);
    return await this.save(newCategory);
  }

  public async loadAllCategories(): Promise<CategoryEntity[]> {
    return await this.find();
  }
}
