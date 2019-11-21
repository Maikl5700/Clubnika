import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    status: 200,
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds')
  },
  {
    id: uuid(),
    status: 522,
    error: 'Invalid credit card',
    method: 'POST',
    route: '/api/purchase',
    desc: 'Purchase',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(2, 'minutes')
      .subtract(56, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'DELETE',
    route: '/api/products/d65654e/remove',
    desc: 'Cart remove',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(8, 'minutes')
      .subtract(23, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'GET',
    route: '/api/products/d65654e/add',
    desc: 'Cart add',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(20, 'minutes')
      .subtract(54, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'GET',
    route: '/api/products/c85727f/add',
    desc: 'Cart add',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(34, 'minutes')
      .subtract(16, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'GET',
    route: '/api/products/c85727f',
    desc: 'View product',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(54, 'minutes')
      .subtract(30, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'GET',
    route: '/api/products',
    desc: 'Get products',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(56, 'minutes')
      .subtract(40, 'seconds')
  },
  {
    id: uuid(),
    status: 200,
    method: 'POST',
    route: '/api/login',
    desc: 'Login',
    IP: '84.234.243.42',
    created_at: moment()
      .subtract(2, 'days')
      .subtract(57, 'minutes')
      .subtract(5, 'seconds')
  }
];
