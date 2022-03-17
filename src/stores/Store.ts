import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type StoreDocument = Store & Document;

@ObjectType()
@Schema()
export class Store {
  @Field()
  @Prop()
  storeId?: string;

  @Field()
  @Prop()
  name?: string;

  @Field()
  @Prop()
  address?: string;

  @Field()
  @Prop()
  city?: string;

  @Field()
  @Prop()
  openingHours?: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
