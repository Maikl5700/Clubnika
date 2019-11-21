import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

import { GenericMoreButton } from 'components';
import { Chart } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  chartContainer: {
    padding: theme.spacing(3)
  },
  chart: {
    height: 281
  },
  statsContainer: {
    display: 'flex'
  },
  statsItem: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(3, 2),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }
}));

const EarningsSegmentation = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [data] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Earnings Segmentation"
      />
      <Divider />
      <CardContent className={classes.content}>
        <div className={classes.chartContainer}>
          <Chart
            className={classes.chart}
            data={data}
          />
        </div>
        <Divider />
        <div className={classes.statsContainer}>
          {data.map(item => (
            <div
              className={classes.statsItem}
              key={item.id}
            >
              <Typography
                align="center"
                component="h6"
                gutterBottom
                variant="overline"
              >
                {item.label}
              </Typography>
              <Typography
                align="center"
                variant="h4"
              >
                {item.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

EarningsSegmentation.propTypes = {
  className: PropTypes.string
};

export default EarningsSegmentation;
