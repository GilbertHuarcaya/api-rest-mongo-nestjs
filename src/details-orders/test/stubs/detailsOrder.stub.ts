import { DetailsOrder } from '../../DetailsOrder';

export const detailsorderStub = (): DetailsOrder => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
