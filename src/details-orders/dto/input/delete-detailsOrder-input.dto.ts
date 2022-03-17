import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteDetailsOrderInput {
  @Field()
  @IsNotEmpty()
  detailsorderId: string;
}
