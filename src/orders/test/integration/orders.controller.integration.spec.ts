import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateOrderRequest } from '../../dto/request/create-order-request.dto';
import { orderStub } from '../stubs/order.stub';

describe('OrdersController', () => {
  let dbConnection: Connection;
  let httpServer: any;
  let app: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef
      .get<DatabaseService>(DatabaseService)
      .getDbHandle();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await dbConnection.collection('orders').deleteMany({});
  });

  describe('getOrders', () => {
    it('should return an array of orders', async () => {
      await dbConnection.collection('orders').insertOne(orderStub());
      const response = await request(httpServer).get('/orders');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([orderStub()]);
    });
  });

  describe('createOrder', () => {
    it('should create a order', async () => {
      const createOrderRequest: CreateOrderRequest = {
        email: orderStub().email,
        age: orderStub().age,
      };
      const response = await request(httpServer)
        .post('/orders')
        .send(createOrderRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createOrderRequest);

      const order = await dbConnection
        .collection('orders')
        .findOne({ email: createOrderRequest.email });
      expect(order).toMatchObject(createOrderRequest);
    });
  });
});
