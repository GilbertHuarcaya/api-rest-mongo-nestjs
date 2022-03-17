import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetProductArgs } from './dto/args/get-product-args.dto';
import { CreateProductInput } from './dto/input/create-product-input.dto';
import { UpdateProductInput } from './dto/input/update-product-input.dto';

import { Product } from './Product';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => Product, { name: 'product', nullable: true })
  async getProduct(@Args() getProductArgs: GetProductArgs): Promise<Product> {
    return this.productsService.getProduct(getProductArgs);
  }

  @Query(() => [Product], { name: 'products', nullable: 'items' })
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductData') createProductData: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductData);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductData') updateProductData: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.updateProduct(updateProductData);
  }
}
