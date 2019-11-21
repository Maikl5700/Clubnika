import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ],
    updated_at: moment().subtract(24, 'minutes')
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    author: {
      name: 'Devias IO',
      avatar: ''
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600]
      }
    ],
    updated_at: moment().subtract(1, 'hour')
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Devias IO',
      avatar: ''
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ],
    updated_at: moment().subtract(16, 'hour')
  }
];
