import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { DetailsOrder, DetailsOrderDocument } from './DetailsOrder';

@Injectable()
export class DetailsOrdersRepository {
  constructor(
    @InjectModel(DetailsOrder.name)
    private detailsOrderModel: Model<DetailsOrderDocument>,
  ) {}

  async findOne(
    detailsOrderFilterQuery: DocumentDefinition<DetailsOrder>,
  ): Promise<DetailsOrder> {
    return this.detailsOrderModel.findOne(detailsOrderFilterQuery);
  }

  async find(
    detailsOrdersFilterQuery: DocumentDefinition<DetailsOrder>,
  ): Promise<DetailsOrder[]> {
    return this.detailsOrderModel.find(detailsOrdersFilterQuery);
  }

  async create(detailsOrder: DetailsOrder): Promise<DetailsOrder> {
    const newDetailsOrder = new this.detailsOrderModel(detailsOrder);
    return newDetailsOrder.save();
  }

  async findOneAndUpdate(
    detailsOrderFilterQuery: DocumentDefinition<DetailsOrder>,
    detailsOrder: Partial<DetailsOrder>,
  ): Promise<DetailsOrder> {
    return this.detailsOrderModel.findOneAndUpdate(
      detailsOrderFilterQuery,
      detailsOrder,
      {
        new: true,
      },
    );
  }
}
