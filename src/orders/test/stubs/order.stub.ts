import { Order } from '../../Order';

export const orderStub = (): Order => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
