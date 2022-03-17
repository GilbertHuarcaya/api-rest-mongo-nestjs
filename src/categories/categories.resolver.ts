import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetCategoryArgs } from './dto/args/get-category-args.dto';
import { CreateCategoryInput } from './dto/input/create-category-input.dto';
import { UpdateCategoryInput } from './dto/input/update-category-input.dto';

import { Category } from './Category';
import { CategoriesService } from './categories.service';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => Category, { name: 'category', nullable: true })
  async getCategory(
    @Args() getCategoryArgs: GetCategoryArgs,
  ): Promise<Category> {
    return this.categoriesService.getCategory(getCategoryArgs);
  }

  @Query(() => [Category], { name: 'categories', nullable: 'items' })
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.getCategories();
  }

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategoryData') createCategoryData: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryData);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('updateCategoryData') updateCategoryData: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(updateCategoryData);
  }
}
