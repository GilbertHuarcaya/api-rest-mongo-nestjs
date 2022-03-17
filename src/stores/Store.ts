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
  email?: string;

  @Field()
  @Prop()
  age?: number;

  @Field(() => [String])
  @Prop([String])
  favoriteFoods?: string[];
}

export const StoreSchema = SchemaFactory.createForClass(Store);
