import { DetailsOrder } from '../../DetailsOrder';

export const detailsOrderStub = (): DetailsOrder => {
  return {
    orderId: '123123',
    quantity: 10,
    productName: 'Product name',
  };
};
