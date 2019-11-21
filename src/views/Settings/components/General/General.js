import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { ProfileDetails, GeneralSettings } from './components';
import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [user] = useState(mockData);

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
        <ProfileDetails user={user} />
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <GeneralSettings user={user} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string
};

export default General;
