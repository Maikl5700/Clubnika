import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    price: '3K - 6K',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    tags: [
      {
        text: 'Vue JS',
        color: colors.green[600]
      }
    ],
    updated_at: moment().subtract(24, 'minutes')
  }
];
