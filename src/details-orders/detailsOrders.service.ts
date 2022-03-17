import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetDetailsOrderArgs } from './dto/args/get-detailsOrder-args.dto';
import { CreateDetailsOrderInput } from './dto/input/create-detailsOrder-input.dto';
import { UpdateDetailsOrderInput } from './dto/input/update-detailsOrder-input.dto';
import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersRepository } from './detailsOrders.repository';

@Injectable()
export class DetailsOrdersService {
  constructor(private readonly detailsordersRepository: DetailsOrdersRepository) {}

  async getDetailsOrder(getDetailsOrderArgs: GetDetailsOrderArgs): Promise<DetailsOrder> {
    return this.detailsordersRepository.findOne(getDetailsOrderArgs);
  }

  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsordersRepository.find({});
  }

  async createDetailsOrder(createDetailsOrderData: CreateDetailsOrderInput): Promise<DetailsOrder> {
    return this.detailsordersRepository.create({
      detailsorderId: uuidv4(),
      email: createDetailsOrderData.email,
      age: createDetailsOrderData.age,
      favoriteFoods: [],
    });
  }

  async updateDetailsOrder(updateDetailsOrderData: UpdateDetailsOrderInput): Promise<DetailsOrder> {
    return this.detailsordersRepository.findOneAndUpdate(
      { detailsorderId: updateDetailsOrderData.detailsorderId },
      updateDetailsOrderData,
    );
  }
}
