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
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ],
    updated_at: moment().subtract(1, 'hour')
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
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
    updated_at: moment().subtract(16, 'hour')
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ],
    updated_at: moment().subtract(3, 'days')
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      },
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ],
    updated_at: moment().subtract(7, 'days')
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
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
    updated_at: moment().subtract(8, 'days')
  }
];
