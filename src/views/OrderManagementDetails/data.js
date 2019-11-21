import uuid from 'uuid/v1';
import moment from 'moment';

export default {
  id: uuid(),
  ref: 'FAD107',
  promoCode: null,
  value: '55.25',
  currency: '$',
  status: 'canceled',
  customer: {
    name: 'Ekaterina Tankova',
    address: 'Street King William, 42456',
    city: 'Montgomery',
    country: 'United States'
  },
  items: [
    {
      id: uuid(),
      name: 'Project Points',
      cuantity: 25,
      billing: 'monthly',
      status: 'completed',
      value: '50.25',
      currency: '$'
    },
    {
      id: uuid(),
      name: 'Freelancer Subscription',
      cuantity: 1,
      billing: 'monthly',
      status: 'completed',
      value: '5.00',
      currency: '$'
    }
  ],
  created_at: moment()
};
