import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateStoreRequest } from '../../dto/request/create-store-request.dto';
import { storeStub } from '../stubs/store.stub';

describe('StoresController', () => {
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
    await dbConnection.collection('stores').deleteMany({});
  });

  describe('getStores', () => {
    it('should return an array of stores', async () => {
      await dbConnection.collection('stores').insertOne(storeStub());
      const response = await request(httpServer).get('/stores');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([storeStub()]);
    });
  });

  describe('createStore', () => {
    it('should create a store', async () => {
      const createStoreRequest: CreateStoreRequest = {
        email: storeStub().email,
        age: storeStub().age,
      };
      const response = await request(httpServer)
        .post('/stores')
        .send(createStoreRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createStoreRequest);

      const store = await dbConnection
        .collection('stores')
        .findOne({ email: createStoreRequest.email });
      expect(store).toMatchObject(createStoreRequest);
    });
  });
});
