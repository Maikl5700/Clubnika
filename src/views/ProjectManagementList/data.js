import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    title: 'Mella Full Screen Slider',
    price: '12,500',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    members: 5
  },
  {
    id: uuid(),
    title: 'Dashboard Design',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png'
    },
    members: 3
  },
  {
    id: uuid(),
    title: 'Ten80 Web Design',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Completed',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png'
    },
    members: 8
  },
  {
    id: uuid(),
    title: 'Neura e-commerce UI Kit',
    price: '12,500',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'In progress',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png'
    },
    members: 10
  },
  {
    id: uuid(),
    title: 'Administrator Dashboard',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Canceled',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    members: 2
  },
  {
    id: uuid(),
    title: 'Kalli UI Kit',
    price: '15,750',
    currency: '$',
    start_date: moment(),
    end_date: moment(),
    status: 'Completed',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png'
    },
    members: 12
  }
];
