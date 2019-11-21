import uuid from 'uuid/v1';
import { colors } from '@material-ui/core';

export default [
  {
    id: uuid(),
    label: 'Subscriptions',
    value: 56,
    color: colors.indigo[500]
  },
  {
    id: uuid(),
    label: 'Afiliate',
    value: 24,
    color: colors.indigo[300]
  },
  {
    id: uuid(),
    label: 'Sales',
    value: 20,
    color: colors.indigo[100]
  }
];
