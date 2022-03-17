import { DetailsOrder } from '../../DetailsOrder';

export const detailsOrderStub = (): DetailsOrder => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
