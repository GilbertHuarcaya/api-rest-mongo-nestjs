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
  orderId?: string;

  @Field()
  @Prop()
  quantity?: number;

  @Field()
  @Prop()
  productName?: string;
}

export const DetailsOrderSchema = SchemaFactory.createForClass(DetailsOrder);
