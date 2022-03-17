import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateDetailsOrderRequest } from './dto/request/create-detailsOrder-request.dto';
import { UpdateDetailsOrderRequest } from './dto/request/update-detailsOrder-request.dto';

import { DetailsOrder } from './DetailsOrder';
import { DetailsOrdersService } from './detailsOrders.service';

@Controller('detailsorders')
export class DetailsOrdersController {
  constructor(private readonly detailsordersService: DetailsOrdersService) {}

  @Get(':detailsorderId')
  async getDetailsOrder(
    @Param('detailsorderId') detailsorderId: string,
  ): Promise<DetailsOrder> {
    return this.detailsordersService.getDetailsOrder({ detailsorderId });
  }

  @Get()
  async getDetailsOrders(): Promise<DetailsOrder[]> {
    return this.detailsordersService.getDetailsOrders();
  }

  @Post()
  async createDetailsOrder(
    @Body() createDetailsOrderRequest: CreateDetailsOrderRequest,
  ): Promise<DetailsOrder> {
    return this.detailsordersService.createDetailsOrder(
      createDetailsOrderRequest,
    );
  }

  @Patch(':detailsorderId')
  async updateDetailsOrder(
    @Param('detailsorderId') detailsorderId: string,
    @Body() updateDetailsOrderRequest: UpdateDetailsOrderRequest,
  ): Promise<DetailsOrder> {
    return this.detailsordersService.updateDetailsOrder({
      detailsorderId,
      ...updateDetailsOrderRequest,
    });
  }
}
