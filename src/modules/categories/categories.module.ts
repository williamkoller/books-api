import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesRepository } from './repositories/categories.repository';
import { AddCategoryService } from './services/add-category/add-category.service';
import { LoadAllCategoriesService } from './services/load-all-categories/load-all-categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, CategoriesRepository])],
  providers: [AddCategoryService, LoadAllCategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
