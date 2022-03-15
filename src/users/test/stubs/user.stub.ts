import { User } from '../../User';

export const userStub = (): User => {
  return {
    email: 'test@example.com',
    age: 23,
    favoriteFoods: ['apples', 'pizza'],
  };
};
