import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@ObjectType()
@Schema()
export class Order {
  @Field()
  @Prop()
  orderId?: string;

  @Field()
  @Prop()
  name?: string;

  @Field()
  @Prop()
  date?: Date;

  @Field()
  @Prop()
  shippingAddress?: string;

  @Field()
  @Prop()
  city?: string;

  @Field()
  @Prop()
  pickup?: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
