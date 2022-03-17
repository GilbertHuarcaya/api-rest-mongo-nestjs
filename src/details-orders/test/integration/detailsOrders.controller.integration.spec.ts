import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateDetailsOrderRequest } from '../../dto/request/create-detailsOrder-request.dto';
import { detailsorderStub } from '../stubs/detailsOrder.stub';

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
    await dbConnection.collection('detailsorders').deleteMany({});
  });

  describe('getDetailsOrders', () => {
    it('should return an array of detailsorders', async () => {
      await dbConnection.collection('detailsorders').insertOne(detailsorderStub());
      const response = await request(httpServer).get('/detailsorders');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([detailsorderStub()]);
    });
  });

  describe('createDetailsOrder', () => {
    it('should create a detailsorder', async () => {
      const createDetailsOrderRequest: CreateDetailsOrderRequest = {
        email: detailsorderStub().email,
        age: detailsorderStub().age,
      };
      const response = await request(httpServer)
        .post('/detailsorders')
        .send(createDetailsOrderRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createDetailsOrderRequest);

      const detailsorder = await dbConnection
        .collection('detailsorders')
        .findOne({ email: createDetailsOrderRequest.email });
      expect(detailsorder).toMatchObject(createDetailsOrderRequest);
    });
  });
});
