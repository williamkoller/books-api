import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { AddCategoryDto } from '@/modules/categories/dtos/add-category/add-category.dto';
import { CategoriesRepository } from '@/modules/categories/repositories/categories.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCategoryService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  public async add(addCategoryDto: AddCategoryDto): Promise<CategoryEntity> {
    return await this.categoriesRepo.addCategory(addCategoryDto);
  }
}
