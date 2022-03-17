import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetStoreArgs } from './dto/args/get-store-args.dto';
import { CreateStoreInput } from './dto/input/create-store-input.dto';
import { UpdateStoreInput } from './dto/input/update-store-input.dto';
import { Store } from './Store';
import { StoresRepository } from './stores.repository';

@Injectable()
export class StoresService {
  constructor(private readonly storesRepository: StoresRepository) {}

  async getStore(getStoreArgs: GetStoreArgs): Promise<Store> {
    return this.storesRepository.findOne(getStoreArgs);
  }

  async getStores(): Promise<Store[]> {
    return this.storesRepository.find({});
  }

  async createStore(createStoreData: CreateStoreInput): Promise<Store> {
    return this.storesRepository.create({
      storeId: uuidv4(),
      name: createStoreData.name,
      address: createStoreData.address,
      city: createStoreData.city,
      openingHours: createStoreData.openingHours,
    });
  }

  async updateStore(updateStoreData: UpdateStoreInput): Promise<Store> {
    return this.storesRepository.findOneAndUpdate(
      { storeId: updateStoreData.storeId },
      updateStoreData,
    );
  }
}
