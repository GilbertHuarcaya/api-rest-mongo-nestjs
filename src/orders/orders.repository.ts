import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { Order, OrderDocument } from './Order';

@Injectable()
export class OrdersRepository {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async findOne(orderFilterQuery: DocumentDefinition<Order>): Promise<Order> {
    return this.orderModel.findOne(orderFilterQuery);
  }

  async find(ordersFilterQuery: DocumentDefinition<Order>): Promise<Order[]> {
    return this.orderModel.find(ordersFilterQuery);
  }

  async create(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async findOneAndUpdate(
    orderFilterQuery: DocumentDefinition<Order>,
    order: Partial<Order>,
  ): Promise<Order> {
    return this.orderModel.findOneAndUpdate(orderFilterQuery, order, {
      new: true,
    });
  }
}
