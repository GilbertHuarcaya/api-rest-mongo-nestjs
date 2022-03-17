import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetDetailsOrderArgs } from './dto/args/get-detailsOrder-args.dto';
import { CreateDetailsOrderInput } from './dto/input/create-detailsOrder-input.dto';
import { UpdateDetailsOrderInput } from './dto/input/update-detailsOrder-input.dto';

import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersService } from './detailsOrders.service';

@Resolver(() => DetailsOrder)
export class DetailsOrdersResolver {
  constructor(private readonly detailsordersService: DetailsOrdersService) {}

  @Query(() => DetailsOrder, { name: 'detailsorder', nullable: true })
  async getDetailsOrder(@Args() getDetailsOrderArgs: GetDetailsOrderArgs): Promise<DetailsOrder> {
    return this.detailsordersService.getDetailsOrder(getDetailsOrderArgs);
  }

  @Query(() => [DetailsOrder], { name: 'detailsorders', nullable: 'items' })
  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsordersService.getDetailsOrders();
  }

  @Mutation(() => DetailsOrder)
  async createDetailsOrder(
    @Args('createDetailsOrderData') createDetailsOrderData: CreateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsordersService.createDetailsOrder(createDetailsOrderData);
  }

  @Mutation(() => DetailsOrder)
  async updateDetailsOrder(
    @Args('updateDetailsOrderData') updateDetailsOrderData: UpdateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsordersService.updateDetailsOrder(updateDetailsOrderData);
  }
}
