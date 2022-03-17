import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetProductArgs } from './dto/args/get-product-args.dto';
import { CreateProductInput } from './dto/input/create-product-input.dto';
import { UpdateProductInput } from './dto/input/update-product-input.dto';
import { Product } from './Product';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getProduct(getProductArgs: GetProductArgs): Promise<Product> {
    return this.productsRepository.findOne(getProductArgs);
  }

  async getProducts(): Promise<Product[]> {
    return this.productsRepository.find({});
  }

  async createProduct(createProductData: CreateProductInput): Promise<Product> {
    return this.productsRepository.create({
      productId: uuidv4(),
      name: createProductData.name,
      price: createProductData.price,
      description: createProductData.description,
      categoryId: createProductData.categoryId,
      stock: createProductData.stock,
      createdAt: new Date(),
    });
  }

  async updateProduct(updateProductData: UpdateProductInput): Promise<Product> {
    return this.productsRepository.findOneAndUpdate(
      { productId: updateProductData.productId },
      updateProductData,
    );
  }
}
