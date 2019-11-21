import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

import { Page } from 'components';
import { Header, Details } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const InvoiceDetails = () => {
  const classes = useStyles();

  const [invoice] = useState(mockData);

  return (
    <Page title="Invoice Details">
      <div className={classes.root}>
        <Header invoice={invoice} />
        <Divider className={classes.divider} />
        <Details invoice={invoice} />
      </div>
    </Page>
  );
};

export default InvoiceDetails;
