import uuid from 'uuid/v1';
import moment from 'moment';

export default {
  groups: [
    {
      id: 'clients',
      name: 'Clients'
    },
    {
      id: 'friends',
      name: 'Friends'
    }
  ],
  connections: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
      active: false,
      lastActivity: moment().subtract(1, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      avatar: '/images/avatars/avatar_8.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      avatar: '/images/avatars/avatar_7.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      avatar: '/images/avatars/avatar_12.png',
      active: false,
      lastActivity: moment().subtract(2, 'days')
    }
  ]
};
