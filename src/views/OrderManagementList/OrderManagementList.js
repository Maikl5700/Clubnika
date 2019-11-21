import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, AdvanceSearch } from 'components';
import { Header, Results } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  ordersResults: {
    marginTop: theme.spacing(3)
  }
}));

const OrderManagementList = () => {
  const classes = useStyles();

  const [fetch, setFetch] = useState(true);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (fetch) {
      setTimeout(() => {
        if (mounted) {
          setFetch(false);
          setOrders(mockData);
        }
      }, 200);
    }

    return () => {
      mounted = false;
    };
  }, [fetch]);

  // eslint-disable-next-line no-unused-vars
  const handleSearch = query => {
    setFetch(true);
  };
  // eslint-disable-next-line no-unused-vars
  const handleFilter = query => {
    setFetch(true);
  };

  const showOrders = !fetch && orders;

  return (
    <Page title="Manage Orders">
      <div className={classes.root}>
        <Header />
        <AdvanceSearch
          onFilter={handleSearch}
          onSearch={handleSearch}
        />
        {showOrders && (
          <Results
            className={classes.ordersResults}
            orders={orders}
          />
        )}
      </div>
    </Page>
  );
};

export default OrderManagementList;
