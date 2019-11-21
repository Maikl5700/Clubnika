import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { OverallReviews, ReviewCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  review: {
    marginTop: theme.spacing(2)
  }
}));

const Reviews = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [reviews] = useState(mockData);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <OverallReviews ratings={reviews.map(review => review.rating)} />
      {reviews.map(review => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string
};

export default Reviews;
