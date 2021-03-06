import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { Product, ProductDocument } from './Product';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findOne(
    productFilterQuery: DocumentDefinition<Product>,
  ): Promise<Product> {
    return this.productModel.findOne(productFilterQuery);
  }

  async find(
    productsFilterQuery: DocumentDefinition<Product>,
  ): Promise<Product[]> {
    return this.productModel.find(productsFilterQuery);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findOneAndUpdate(
    productFilterQuery: DocumentDefinition<Product>,
    product: Partial<Product>,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate(productFilterQuery, product, {
      new: true,
    });
  }

  async findOneAndDelete(
    productFilterQuery: DocumentDefinition<Product>,
  ): Promise<Product> {
    return this.productModel.findOneAndDelete(productFilterQuery);
  }
}
