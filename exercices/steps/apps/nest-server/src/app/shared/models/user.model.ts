interface IAddress {
  number: number;
  street: string;
  city: string;
  zipcode: string;
  country: string;
}

interface IUser {
  login: string;
  password: string;
  address: IAddress;
}

export type User = Readonly<IUser>;

export const USER_SCHEMA = {
  type: 'object',
  properties: {
    login: { type: 'string' },
    address: {
      type: 'object',
      properties: {
        number: { type: 'number' },
        street: { type: 'string' },
        city: { type: 'string' },
        zipcode: { type: 'string' },
        country: { type: 'string' },
      },
    },
  },
};
