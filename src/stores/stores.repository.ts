import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DocumentDefinition, Model } from 'mongoose';

import { Store, StoreDocument } from './Store';

@Injectable()
export class StoresRepository {
  constructor(
    @InjectModel(Store.name) private storeModel: Model<StoreDocument>,
  ) {}

  async findOne(storeFilterQuery: DocumentDefinition<Store>): Promise<Store> {
    return this.storeModel.findOne(storeFilterQuery);
  }

  async find(storesFilterQuery: DocumentDefinition<Store>): Promise<Store[]> {
    return this.storeModel.find(storesFilterQuery);
  }

  async create(store: Store): Promise<Store> {
    const newStore = new this.storeModel(store);
    return newStore.save();
  }

  async findOneAndUpdate(
    storeFilterQuery: DocumentDefinition<Store>,
    store: Partial<Store>,
  ): Promise<Store> {
    return this.storeModel.findOneAndUpdate(storeFilterQuery, store, {
      new: true,
    });
  }
}
