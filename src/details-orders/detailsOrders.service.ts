import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetDetailsOrderArgs } from './dto/args/get-detailsOrder-args.dto';
import { CreateDetailsOrderInput } from './dto/input/create-detailsOrder-input.dto';
import { UpdateDetailsOrderInput } from './dto/input/update-detailsOrder-input.dto';
import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersRepository } from './detailsOrders.repository';

@Injectable()
export class DetailsOrdersService {
  constructor(
    private readonly detailsOrdersRepository: DetailsOrdersRepository,
  ) {}

  async getDetailsOrder(
    getDetailsOrderArgs: GetDetailsOrderArgs,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersRepository.findOne(getDetailsOrderArgs);
  }

  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsOrdersRepository.find({});
  }

  async createDetailsOrder(
    createDetailsOrderData: CreateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersRepository.create({
      detailsOrderId: uuidv4(),
      orderId: createDetailsOrderData.orderId,
      quantity: createDetailsOrderData.quantity,
      productName: createDetailsOrderData.productName,
    });
  }

  async updateDetailsOrder(
    updateDetailsOrderData: UpdateDetailsOrderInput,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersRepository.findOneAndUpdate(
      { detailsOrderId: updateDetailsOrderData.detailsOrderId },
      updateDetailsOrderData,
    );
  }
}
