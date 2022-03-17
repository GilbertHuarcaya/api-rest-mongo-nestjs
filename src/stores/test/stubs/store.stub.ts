import { Store } from '../../Store';

export const storeStub = (): Store => {
  return {
    name: 'Park Row at Beekman St',
    address: '38 Park Row',
    city: 'New York',
    openingHours: '10:00 - 14:00 and 17:00 - 20:30',
  };
};
