import { faker } from '@faker-js/faker';

export const EVENT_ID = faker.datatype.uuid();

export const EVENT = {
  id: faker.datatype.uuid(),
  name: faker.company.name(),
  date: faker.date.soon(),
  venue: {
    street: faker.address.street(),
    number: Number(faker.address.buildingNumber()),
    city: faker.address.cityName(),
    country: faker.address.country(),
    zipcode: faker.address.zipCode(),
  },
};
