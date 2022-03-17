import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Store, StoreSchema } from './Store';
import { StoresController } from './stores.controller';
import { StoresRepository } from './stores.repository';
import { StoresResolver } from './stores.resolver';
import { StoresService } from './stores.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
  ],
  controllers: [StoresController],
  providers: [StoresService, StoresRepository, StoresResolver],
})
export class StoresModule {}
