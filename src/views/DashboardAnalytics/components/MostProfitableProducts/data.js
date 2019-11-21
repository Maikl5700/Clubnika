import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    type: 'freelancer_basic',
    name: 'Freelancer Basic Subscription',
    image: '/images/products/product_freelancer.svg',
    subscriptions: '13,153',
    grossIncome: '158,825.00',
    currency: '$',
    price: '5.00',
    progress: 93
  },
  {
    id: uuid(),
    type: 'freelancer_extra',
    name: 'Freelancer Extra Subscription',
    image: '/images/products/product_freelancer.svg',
    subscriptions: '10,300',
    grossIncome: '412,535.00',
    currency: '$',
    price: '15.00',
    progress: 76
  },
  {
    id: uuid(),
    type: 'agency_basic',
    name: 'Agency Basic Subscription',
    image: '/images/products/product_agency.svg',
    subscriptions: '5,300',
    grossIncome: '245,935',
    currency: '$',
    price: '25.00',
    progress: 60
  },
  {
    id: uuid(),
    type: 'enterprise_basic',
    name: 'Enterprise Basic Subscription',
    image: '/images/products/product_enterprise.svg',
    subscriptions: '1,203',
    grossIncome: '373,680.00',
    currency: '$',
    price: '205.00',
    progress: 46
  },
  {
    id: uuid(),
    type: 'enterprise_extra',
    name: 'Enterprise Extra Subscription',
    image: '/images/products/product_enterprise.svg',
    subscriptions: '254',
    grossIncome: '164,345.00',
    currency: '$',
    price: '500.00',
    progress: 41
  }
];
