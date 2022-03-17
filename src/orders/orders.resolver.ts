import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetOrderArgs } from './dto/args/get-order-args.dto';
import { CreateOrderInput } from './dto/input/create-order-input.dto';
import { UpdateOrderInput } from './dto/input/update-order-input.dto';

import { Order } from './Order';
import { OrdersService } from './orders.service';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => Order, { name: 'order', nullable: true })
  async getOrder(@Args() getOrderArgs: GetOrderArgs): Promise<Order> {
    return this.ordersService.getOrder(getOrderArgs);
  }

  @Query(() => [Order], { name: 'orders', nullable: 'items' })
  async getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('createOrderData') createOrderData: CreateOrderInput,
  ): Promise<Order> {
    return this.ordersService.createOrder(createOrderData);
  }

  @Mutation(() => Order)
  async updateOrder(
    @Args('updateOrderData') updateOrderData: UpdateOrderInput,
  ): Promise<Order> {
    return this.ordersService.updateOrder(updateOrderData);
  }
}
