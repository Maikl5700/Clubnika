import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    date: moment(),
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    paymentMethod: 'Credit Card',
    value: '5.25',
    currency: '$',
    status: 'paid'
  },
  {
    id: uuid(),
    date: moment(),
    description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
    paymentMethod: 'Credit Card',
    value: '5.25',
    currency: '$',
    status: 'paid'
  }
];
