import uuid from 'uuid/v1';
import moment from 'moment';

export default {
  name: 'Ekaterina Tankova',
  email: 'ekaterina@devias.io',
  phone: '+55 748 327 439',
  state: 'Alabama',
  country: 'United States',
  zipCode: '240355',
  address1: 'Street John Wick, no. 7',
  address2: 'House #25',
  iban: '4142 **** **** **** ****',
  autoCC: false,
  verified: true,
  currency: '$',
  invoices: [
    {
      id: uuid(),
      type: 'paid',
      value: 10.0
    },
    {
      id: uuid(),
      type: 'paid',
      value: 15.0
    },
    {
      id: uuid(),
      type: 'due',
      value: 5
    },
    {
      id: uuid(),
      type: 'income',
      value: 10.0
    }
  ],
  vat: 19,
  balance: 0,
  emails: [
    {
      id: uuid(),
      description: 'Order confirmation',
      created_at: moment()
        .subtract(3, 'days')
        .subtract(5, 'hours')
        .subtract(34, 'minutes')
    },
    {
      id: uuid(),
      description: 'Order confirmation',
      created_at: moment()
        .subtract(4, 'days')
        .subtract(11, 'hours')
        .subtract(49, 'minutes')
    }
  ]
};
