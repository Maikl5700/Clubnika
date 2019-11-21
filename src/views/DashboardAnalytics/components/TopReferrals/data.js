import uuid from 'uuid/v1';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    color: colors.blueGrey['700'],
    name: 'GitHub',
    initials: 'GT',
    value: '53,032'
  },
  {
    id: uuid(),
    color: colors.cyan['500'],
    name: 'Twitter',
    initials: 'TW',
    value: '39,551'
  },
  {
    id: uuid(),
    color: colors.indigo[600],
    name: 'Hacker News',
    initials: 'HN',
    value: '23,150'
  },
  {
    id: uuid(),
    color: colors.red['500'],
    name: 'Stack Overflow',
    initials: 'SO',
    value: '14,093'
  },
  {
    id: uuid(),
    color: colors.orange['900'],
    name: 'Reddit.com',
    initials: 'RD',
    value: '7,251'
  },
  {
    id: uuid(),
    color: colors.blueGrey['900'],
    name: 'Dev.to',
    initials: 'DE',
    value: '5,694'
  },
  {
    id: uuid(),
    color: colors.blue['900'],
    name: 'Facebook',
    initials: 'FB',
    value: '3,643'
  },
  {
    id: uuid(),
    color: colors.blueGrey['900'],
    name: 'Medium',
    initials: 'MD',
    value: '1,654'
  }
];
