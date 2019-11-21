import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, AdvanceSearch } from 'components';
import { Header, Results } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {
  const classes = useStyles();

  const [fetch, setFetch] = useState(true);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (fetch) {
      setTimeout(() => {
        if (mounted) {
          setFetch(false);
          setCustomers(mockData);
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

  const showCustomers = !fetch && customers;

  return (
    <Page title="Manage Customers">
      <div className={classes.root}>
        <Header />
        <AdvanceSearch
          onFilter={handleSearch}
          onSearch={handleSearch}
        />
        {showCustomers && (
          <Results
            className={classes.results}
            customers={customers}
          />
        )}
      </div>
    </Page>
  );
};

export default CustomerManagementList;
