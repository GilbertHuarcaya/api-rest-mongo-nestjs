import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type DetailsOrderDocument = DetailsOrder & Document;

@ObjectType()
@Schema()
export class DetailsOrder {
  @Field()
  @Prop()
  detailsOrderId?: string;

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

export const DetailsOrderSchema = SchemaFactory.createForClass(DetailsOrder);
