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
  email?: string;

  @Field()
  @Prop()
  age?: number;

  @Field(() => [String])
  @Prop([String])
  favoriteFoods?: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
