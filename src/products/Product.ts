import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Field()
  @Prop()
  productId?: string;

  @Field()
  @Prop()
  name?: string;

  @Field()
  @Prop()
  price?: number;

  @Field()
  @Prop()
  description?: string;

  @Field()
  @Prop()
  categoryId?: string;

  @Field()
  @Prop()
  stock?: number;

  @Field()
  @Prop()
  status?: string;

  @Field()
  @Prop()
  createdAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
