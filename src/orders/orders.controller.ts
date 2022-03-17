import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateOrderRequest } from './dto/request/create-order-request.dto';
import { UpdateOrderRequest } from './dto/request/update-order-request.dto';

import { Order } from './Order';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string): Promise<Order> {
    return this.ordersService.getOrder({ orderId });
  }

  @Get()
  async getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  async createOrder(
    @Body() createOrderRequest: CreateOrderRequest,
  ): Promise<Order> {
    return this.ordersService.createOrder(createOrderRequest);
  }

  @Patch(':orderId')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() updateOrderRequest: UpdateOrderRequest,
  ): Promise<Order> {
    return this.ordersService.updateOrder({
      orderId,
      ...updateOrderRequest,
    });
  }
}
