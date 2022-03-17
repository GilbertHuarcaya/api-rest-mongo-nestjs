import { Product } from '../../Product';

export const productStub = (): Product => {
  return {
    name: 'Essential TypeScript 4: From Beginner to Pro',
    price: 45,
    description:
      'Learn the essentials and more of TypeScript, a popular superset of the JavaScript language that adds support for static typing. TypeScript combines the typing features of C# or Java.',
    categoryId: '1231231',
    stock: 0,
  };
};
