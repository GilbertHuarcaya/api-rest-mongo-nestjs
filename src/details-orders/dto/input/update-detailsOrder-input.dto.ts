import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateDetailsOrderInput {
  @Field()
  @IsNotEmpty()
  detailsOrderId: string;

  @Field()
  @IsNotEmpty()
  quantity: number;
}
