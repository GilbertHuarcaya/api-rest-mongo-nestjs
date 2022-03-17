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
  email?: string;

  @Field()
  @Prop()
  age?: number;

  @Field(() => [String])
  @Prop([String])
  favoriteFoods?: string[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
