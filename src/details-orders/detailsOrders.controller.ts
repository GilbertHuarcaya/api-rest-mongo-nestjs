import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateDetailsOrderRequest } from './dto/request/create-detailsOrder-request.dto';
import { UpdateDetailsOrderRequest } from './dto/request/update-detailsOrder-request.dto';

import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersService } from './detailsOrders.service';

@Controller('detailsOrders')
export class DetailsOrdersController {
  constructor(private readonly detailsOrdersService: DetailsOrdersService) {}

  @Get(':detailsOrderId')
  async getDetailsOrder(
    @Param('detailsOrderId') detailsOrderId: string,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersService.getDetailsOrder({ detailsOrderId });
  }

  @Get()
  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsOrdersService.getDetailsOrders();
  }

  @Post()
  async createDetailsOrder(
    @Body() createDetailsOrderRequest: CreateDetailsOrderRequest,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersService.createDetailsOrder(
      createDetailsOrderRequest,
    );
  }

  @Patch(':detailsOrderId')
  async updateDetailsOrder(
    @Param('detailsOrderId') detailsOrderId: string,
    @Body() updateDetailsOrderRequest: UpdateDetailsOrderRequest,
  ): Promise<DetailsOrder> {
    return this.detailsOrdersService.updateDetailsOrder({
      detailsOrderId,
      ...updateDetailsOrderRequest,
    });
  }
}
