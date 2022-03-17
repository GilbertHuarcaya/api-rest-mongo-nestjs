import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetDetailsOrderArgs } from './dto/args/get-detailsOrder-args.dto';
import { CreateDetailsOrderInput } from './dto/input/create-detailsOrder-input.dto';
import { UpdateDetailsOrderInput } from './dto/input/update-detailsOrder-input.dto';

import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersService } from './detailsOrders.service';

@Resolver(() => DetailsOrder)
export class DetailsOrdersResolver {
  constructor(private readonly detailsOrdersService: DetailsOrdersService) {}

  @Query(() => DetailsOrder, { name: 'detailsOrder', nullable: true })
  async getDetailsOrder(@Args() getDetailsOrderArgs: GetDetailsOrderArgs): Promise<DetailsOrder> {
    return this.detailsOrdersService.getDetailsOrder(getDetailsOrderArgs);
  }

  @Query(() => [DetailsOrder], { name: 'detailsOrders', nullable: 'items' })
  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsOrdersService.getDetailsOrders();
  }

  @Mutation(() => DetailsOrder)
  async createDetailsOrder(
    @Args('createDetailsOrderData') createDetailsOrderData: CreateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersService.createDetailsOrder(createDetailsOrderData);
  }

  @Mutation(() => DetailsOrder)
  async updateDetailsOrder(
    @Args('updateDetailsOrderData') updateDetailsOrderData: UpdateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersService.updateDetailsOrder(updateDetailsOrderData);
  }
}
