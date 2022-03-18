import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateProductRequest } from './dto/request/create-product-request.dto';
import { UpdateProductRequest } from './dto/request/update-product-request.dto';

import { Product } from './Product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':productId')
  async getProduct(@Param('productId') productId: string): Promise<Product> {
    return this.productsService.getProduct({ productId });
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Post()
  async createProduct(
    @Body() createProductRequest: CreateProductRequest,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductRequest);
  }

  @Patch(':productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() updateProductRequest: UpdateProductRequest,
  ): Promise<Product> {
    return this.productsService.updateProduct({
      productId,
      ...updateProductRequest,
    });
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<Product> {
    return this.productsService.deleteProduct({ productId });
  }
}
