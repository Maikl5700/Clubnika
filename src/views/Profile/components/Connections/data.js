import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Ekaterina Tankova',
    avatar: '/images/avatars/avatar_2.png',
    common: 12,
    status: 'connected'
  },
  {
    id: uuid(),
    name: 'Cao Yu',
    avatar: '/images/avatars/avatar_3.png',
    common: 10,
    status: 'rejected'
  },
  {
    id: uuid(),
    name: 'Alexa Richardson',
    avatar: '/images/avatars/avatar_4.png',
    common: 8,
    status: 'pending'
  },
  {
    id: uuid(),
    name: 'Adam Denisov',
    avatar: '/images/avatars/avatar_7.png',
    common: 5,
    status: 'not_connected'
  },
  {
    id: uuid(),
    name: 'Ava Gregoraci',
    avatar: '/images/avatars/avatar_8.png',
    common: 1,
    status: 'connected'
  }
];
