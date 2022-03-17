import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateProductRequest } from '../../dto/request/create-product-request.dto';
import { productStub } from '../stubs/product.stub';

describe('ProductsController', () => {
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
    await dbConnection.collection('products').deleteMany({});
  });

  describe('getProducts', () => {
    it('should return an array of products', async () => {
      await dbConnection.collection('products').insertOne(productStub());
      const response = await request(httpServer).get('/products');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([productStub()]);
    });
  });

  describe('createProduct', () => {
    it('should create a product', async () => {
      const createProductRequest: CreateProductRequest = {
        email: productStub().email,
        age: productStub().age,
      };
      const response = await request(httpServer)
        .post('/products')
        .send(createProductRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createProductRequest);

      const product = await dbConnection
        .collection('products')
        .findOne({ email: createProductRequest.email });
      expect(product).toMatchObject(createProductRequest);
    });
  });
});
