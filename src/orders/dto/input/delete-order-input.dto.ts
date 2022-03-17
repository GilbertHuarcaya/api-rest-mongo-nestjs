import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteOrderInput {
  @Field()
  @IsNotEmpty()
  orderId: string;
}
