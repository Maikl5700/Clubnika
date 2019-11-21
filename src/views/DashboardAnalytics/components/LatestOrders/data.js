import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: 'DEV1042',
    items: 7,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Ekaterina Tankova',
      email: 'ekaterina@devias.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1041',
    items: 8,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Cao Yu',
      email: 'cao.yu@devias.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1040',
    items: 4,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Alexa Richardson',
      email: 'alexa.richardson@devias.io'
    },
    status: 'rejected'
  },
  {
    id: uuid(),
    ref: 'DEV1039',
    items: 1,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Anje Keizer',
      email: 'anje.keiser@devias.io'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'DEV1038',
    items: 5,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@devias.io'
    },
    status: 'complete'
  },
  {
    id: uuid(),
    ref: 'DEV1037',
    items: 2,
    value: '25.00',
    currency: '$',
    customer: {
      name: 'Merrile Burgett',
      email: 'merrile.burgett@devias.io'
    },
    status: 'complete'
  }
];
