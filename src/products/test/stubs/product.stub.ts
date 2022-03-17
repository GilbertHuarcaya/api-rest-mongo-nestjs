import { Product } from '../../Product';

export const productStub = (): Product => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
