import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';

import { AppModule } from '../../../app.module';
import { DatabaseService } from '../../../database/database.service';
import { CreateCategoryRequest } from '../../dto/request/create-category-request.dto';
import { categoriestub } from '../stubs/category.stub';

describe('CategoriesController', () => {
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
    await dbConnection.collection('categories').deleteMany({});
  });

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      await dbConnection.collection('categories').insertOne(categoriestub());
      const response = await request(httpServer).get('/categories');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([categoriestub()]);
    });
  });

  describe('createCategory', () => {
    it('should create a category', async () => {
      const createCategoryRequest: CreateCategoryRequest = {
        email: categoriestub().email,
        age: categoriestub().age,
      };
      const response = await request(httpServer)
        .post('/categories')
        .send(createCategoryRequest);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(createCategoryRequest);

      const category = await dbConnection
        .collection('categories')
        .findOne({ email: createCategoryRequest.email });
      expect(category).toMatchObject(createCategoryRequest);
    });
  });
});
