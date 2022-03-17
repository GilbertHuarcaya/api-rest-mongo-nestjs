import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateStoreRequest } from './dto/request/create-store-request.dto';
import { UpdateStoreRequest } from './dto/request/update-store-request.dto';

import { Store } from './Store';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get(':storeId')
  async getStore(@Param('storeId') storeId: string): Promise<Store> {
    return this.storesService.getStore({ storeId });
  }

  @Get()
  async getStores(): Promise<Store[]> {
    return this.storesService.getStores();
  }

  @Post()
  async createStore(
    @Body() createStoreRequest: CreateStoreRequest,
  ): Promise<Store> {
    return this.storesService.createStore(createStoreRequest);
  }

  @Patch(':storeId')
  async updateStore(
    @Param('storeId') storeId: string,
    @Body() updateStoreRequest: UpdateStoreRequest,
  ): Promise<Store> {
    return this.storesService.updateStore({
      storeId,
      ...updateStoreRequest,
    });
  }
}
