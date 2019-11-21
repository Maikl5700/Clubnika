import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    rating: 4,
    message:
      'Shen was really great during the all time session we created the project',
    reviewer: {
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png'
    },
    project: {
      title: 'Mella Full Screen Slider',
      price: '5,240.00'
    },
    pricePerHour: '43.00',
    hours: 31,
    currency: '$',
    created_at: moment().subtract(4, 'hours')
  },
  {
    id: uuid(),
    rating: 5,
    reviewer: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png'
    },
    project: {
      title: 'Dashboard Design',
      price: '3,680.00'
    },
    pricePerHour: '38.00',
    hours: 76,
    currency: '$',
    message:
      'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
    created_at: moment().subtract(8, 'days')
  }
];
