import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CustomerInfo, Invoices, SendEmails, OtherActions } from './components';
import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [customer] = useState(mockData);

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <CustomerInfo customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <Invoices customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <SendEmails customer={customer} />
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <OtherActions />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
