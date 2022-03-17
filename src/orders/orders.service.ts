import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetOrderArgs } from './dto/args/get-order-args.dto';
import { CreateOrderInput } from './dto/input/create-order-input.dto';
import { UpdateOrderInput } from './dto/input/update-order-input.dto';
import { Order } from './Order';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async getOrder(getOrderArgs: GetOrderArgs): Promise<Order> {
    return this.ordersRepository.findOne(getOrderArgs);
  }

  async getOrders(): Promise<Order[]> {
    return this.ordersRepository.find({});
  }

  async createOrder(createOrderData: CreateOrderInput): Promise<Order> {
    return this.ordersRepository.create({
      orderId: uuidv4(),
      email: createOrderData.email,
      age: createOrderData.age,
      favoriteFoods: [],
    });
  }

  async updateOrder(updateOrderData: UpdateOrderInput): Promise<Order> {
    return this.ordersRepository.findOneAndUpdate(
      { orderId: updateOrderData.orderId },
      updateOrderData,
    );
  }
}
