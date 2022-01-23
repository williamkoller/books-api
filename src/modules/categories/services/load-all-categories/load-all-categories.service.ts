import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/categories.repository';

@Injectable()
export class LoadAllCategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  public async loadAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoriesRepo.loadAllCategories();

    if (!categories.length) {
      throw new NotFoundException('No record found.');
    }

    return categories;
  }
}
