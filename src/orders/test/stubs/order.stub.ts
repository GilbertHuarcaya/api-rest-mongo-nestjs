import { Order } from '../../Order';

export const orderStub = (): Order => {
  return {
    name: 'Dominicode',
    shippingAddress: 'Av. de la Granvia de Hospitalet, 115',
    city: 'Barcelona',
    pickup: true,
  };
};
