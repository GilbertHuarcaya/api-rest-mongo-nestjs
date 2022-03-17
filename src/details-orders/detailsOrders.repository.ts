import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { DetailsOrder, DetailsOrderDocument } from './DetailsOrder';

@Injectable()
export class DetailsOrdersRepository {
  constructor(
    @InjectModel(DetailsOrder.name)
    private detailsorderModel: Model<DetailsOrderDocument>,
  ) {}

  async findOne(
    detailsorderFilterQuery: DocumentDefinition<DetailsOrder>,
  ): Promise<DetailsOrder> {
    return this.detailsorderModel.findOne(detailsorderFilterQuery);
  }

  async find(
    detailsordersFilterQuery: DocumentDefinition<DetailsOrder>,
  ): Promise<DetailsOrder[]> {
    return this.detailsorderModel.find(detailsordersFilterQuery);
  }

  async create(detailsorder: DetailsOrder): Promise<DetailsOrder> {
    const newDetailsOrder = new this.detailsorderModel(detailsorder);
    return newDetailsOrder.save();
  }

  async findOneAndUpdate(
    detailsorderFilterQuery: DocumentDefinition<DetailsOrder>,
    detailsorder: Partial<DetailsOrder>,
  ): Promise<DetailsOrder> {
    return this.detailsorderModel.findOneAndUpdate(
      detailsorderFilterQuery,
      detailsorder,
      {
        new: true,
      },
    );
  }
}
