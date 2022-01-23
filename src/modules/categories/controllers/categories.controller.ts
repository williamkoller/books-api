import { CategoryEntity } from '@/infra/typeorm/entities/category-entity/category.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AddCategoryDto } from '@/modules/categories/dtos/add-category/add-category.dto';
import { AddCategoryService } from '@/modules/categories/services/add-category/add-category.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoadAllCategoriesService } from '../services/load-all-categories/load-all-categories.service';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly addCategoryService: AddCategoryService,
    private readonly loadAllCategoriesService: LoadAllCategoriesService,
  ) {}

  @Post('add-category')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'add new category.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'title past request is already in use.',
  })
  public async add(
    @Body() addCategoryDto: AddCategoryDto,
  ): Promise<CategoryEntity> {
    return await this.addCategoryService.add(addCategoryDto);
  }

  @Get('load-all')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'load all categories.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'no record found.',
  })
  public async loadAll(): Promise<CategoryEntity[]> {
    return await this.loadAllCategoriesService.loadAll();
  }
}
