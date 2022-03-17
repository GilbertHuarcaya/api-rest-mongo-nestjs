import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetStoreArgs } from './dto/args/get-store-args.dto';
import { CreateStoreInput } from './dto/input/create-store-input.dto';
import { UpdateStoreInput } from './dto/input/update-store-input.dto';

import { Store } from './Store';
import { StoresService } from './stores.service';

@Resolver(() => Store)
export class StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Query(() => Store, { name: 'store', nullable: true })
  async getStore(@Args() getStoreArgs: GetStoreArgs): Promise<Store> {
    return this.storesService.getStore(getStoreArgs);
  }

  @Query(() => [Store], { name: 'stores', nullable: 'items' })
  async getStores(): Promise<Store[]> {
    return this.storesService.getStores();
  }

  @Mutation(() => Store)
  async createStore(
    @Args('createStoreData') createStoreData: CreateStoreInput,
  ): Promise<Store> {
    return this.storesService.createStore(createStoreData);
  }

  @Mutation(() => Store)
  async updateStore(
    @Args('updateStoreData') updateStoreData: UpdateStoreInput,
  ): Promise<Store> {
    return this.storesService.updateStore(updateStoreData);
  }
}
