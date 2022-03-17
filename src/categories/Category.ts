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
  name?: string;
}

export const Categorieschema = SchemaFactory.createForClass(Category);
