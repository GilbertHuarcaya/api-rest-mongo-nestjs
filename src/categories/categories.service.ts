import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetCategoryArgs } from './dto/args/get-category-args.dto';
import { CreateCategoryInput } from './dto/input/create-category-input.dto';
import { UpdateCategoryInput } from './dto/input/update-category-input.dto';
import { Category } from './Category';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getCategory(getCategoryArgs: GetCategoryArgs): Promise<Category> {
    return this.categoriesRepository.findOne(getCategoryArgs);
  }

  async getCategories(): Promise<Category[]> {
    return this.categoriesRepository.find({});
  }

  async createCategory(
    createCategoryData: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoriesRepository.create({
      categoryId: uuidv4(),
      email: createCategoryData.email,
      age: createCategoryData.age,
      favoriteFoods: [],
    });
  }

  async updateCategory(
    updateCategoryData: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoriesRepository.findOneAndUpdate(
      { categoryId: updateCategoryData.categoryId },
      updateCategoryData,
    );
  }
}
