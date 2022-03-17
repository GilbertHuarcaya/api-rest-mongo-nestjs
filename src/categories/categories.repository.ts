import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { Category, CategoryDocument } from './Category';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async findOne(
    categoryFilterQuery: DocumentDefinition<Category>,
  ): Promise<Category> {
    return this.categoryModel.findOne(categoryFilterQuery);
  }

  async find(
    categoriesFilterQuery: DocumentDefinition<Category>,
  ): Promise<Category[]> {
    return this.categoryModel.find(categoriesFilterQuery);
  }

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  async findOneAndUpdate(
    categoryFilterQuery: DocumentDefinition<Category>,
    category: Partial<Category>,
  ): Promise<Category> {
    return this.categoryModel.findOneAndUpdate(categoryFilterQuery, category, {
      new: true,
    });
  }
}
