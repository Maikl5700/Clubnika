import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import { Header, OrderInfo, OrderItems } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const OrderManagementDetails = () => {
  const classes = useStyles();

  const [order] = useState(mockData);

  return (
    <Page title="Manage Order Details">
      <div className={classes.root}>
        <Header order={order} />
        <Grid
          className={classes.container}
          container
          spacing={3}
        >
          <Grid
            item
            md={4}
            xl={3}
            xs={12}
          >
            <OrderInfo order={order} />
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <OrderItems order={order} />
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};

export default OrderManagementDetails;
