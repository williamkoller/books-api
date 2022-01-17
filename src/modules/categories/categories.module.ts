import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
})
export class CategoriesModule {}
