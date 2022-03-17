import { Store } from '../../Store';

export const storeStub = (): Store => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
