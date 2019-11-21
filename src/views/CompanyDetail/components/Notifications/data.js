import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    value: 6,
    type: 'invite',
    message: 'to send service quotes'
  },
  {
    id: uuid(),
    value: 2,
    type: 'message',
    message: 'from clients'
  },
  {
    id: uuid(),
    value: 1,
    type: 'payout',
    message: 'that needs your confirmation'
  }
];
