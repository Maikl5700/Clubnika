import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png'
    },
    created_at: moment().subtract(23, 'minutes')
  },
  {
    id: uuid(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    created_at: moment().subtract(56, 'minutes')
  },
  {
    id: uuid(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Alexa Richardson',
      avatar: '/images/avatars/avatar_4.png'
    },
    created_at: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    created_at: moment().subtract(5, 'minutes')
  },
  {
    id: uuid(),
    type: 'payment',
    description: 'Subscription Purchase',
    author: {
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png'
    },
    created_at: moment().subtract(5, 'minutes')
  }
];
