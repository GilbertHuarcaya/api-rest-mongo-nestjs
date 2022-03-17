import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDetailsOrderInput {
  @Field()
  @IsNotEmpty()
  orderId: string;

  @Field()
  @IsNotEmpty()
  quantity: number;

  @Field()
  @IsNotEmpty()
  productName: string;
}
