import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field()
  @IsNotEmpty()
  categoryId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  name?: string;
}
