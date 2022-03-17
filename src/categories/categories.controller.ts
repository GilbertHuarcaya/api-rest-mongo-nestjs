import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateCategoryRequest } from './dto/request/create-category-request.dto';
import { UpdateCategoryRequest } from './dto/request/update-category-request.dto';

import { Category } from './Category';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':categoryId')
  async getCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Category> {
    return this.categoriesService.getCategory({ categoryId });
  }

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @Post()
  async createCategory(
    @Body() createCategoryRequest: CreateCategoryRequest,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryRequest);
  }

  @Patch(':categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryRequest: UpdateCategoryRequest,
  ): Promise<Category> {
    return this.categoriesService.updateCategory({
      categoryId,
      ...updateCategoryRequest,
    });
  }
}
