import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field()
  @IsNotEmpty()
  productId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  stock?: number;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  status?: string;
}
