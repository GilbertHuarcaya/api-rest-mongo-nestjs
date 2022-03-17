import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DetailsOrder, DetailsOrderSchema } from './DetailsOrder';
import { DetailsOrdersController } from './detailsOrders.controller';
import { DetailsOrdersRepository } from './detailsOrders.repository';
import { DetailsOrdersResolver } from './detailsOrders.resolver';
import { DetailsOrdersService } from './detailsOrders.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DetailsOrder.name, schema: DetailsOrderSchema },
    ]),
  ],
  controllers: [DetailsOrdersController],
  providers: [
    DetailsOrdersService,
    DetailsOrdersRepository,
    DetailsOrdersResolver,
  ],
})
export class DetailsOrdersModule {}
