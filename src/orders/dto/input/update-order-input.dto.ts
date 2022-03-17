import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateOrderInput {
  @Field()
  @IsNotEmpty()
  orderId: string;

  @Field()
  @IsOptional()
  pickup: boolean;
}
