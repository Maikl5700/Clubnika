import uuid from 'uuid/v1';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    tags: [
      {
        text: 'HTML & CSS',
        color: colors.grey[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
    },
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    price: '12,500',
    currency: '$',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ]
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    price: '15,750',
    currency: '$',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    tags: [
      {
        text: 'Angular JS',
        color: colors.red[600]
      }
    ]
  }
];
