import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateDetailsOrderRequest } from '../../dto/request/create-detailsOrder-request.dto';
import { detailsOrderStub } from '../stubs/detailsOrder.stub';

describe('DetailsOrdersController', () => {
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
    await dbConnection.collection('detailsOrders').deleteMany({});
  });

  describe('getDetailsOrders', () => {
    it('should return an array of detailsOrders', async () => {
      await dbConnection
        .collection('detailsOrders')
        .insertOne(detailsOrderStub());
      const response = await request(httpServer).get('/detailsOrders');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([detailsOrderStub()]);
    });
  });

  describe('createDetailsOrder', () => {
    it('should create a detailsOrder', async () => {
      const createDetailsOrderRequest: CreateDetailsOrderRequest = {
        email: detailsOrderStub().email,
        age: detailsOrderStub().age,
      };
      const response = await request(httpServer)
        .post('/detailsOrders')
        .send(createDetailsOrderRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createDetailsOrderRequest);

      const detailsOrder = await dbConnection
        .collection('detailsOrders')
        .findOne({ email: createDetailsOrderRequest.email });
      expect(detailsOrder).toMatchObject(createDetailsOrderRequest);
    });
  });
});
