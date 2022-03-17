import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@ObjectType()
@Schema()
export class Category {
  @Field()
  @Prop()
  categoryId?: string;

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

export const Categorieschema = SchemaFactory.createForClass(Category);
