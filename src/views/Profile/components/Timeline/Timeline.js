import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { NewPost, PostCard } from 'components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  posts: {
    marginTop: theme.spacing(2)
  },
  post: {
    marginBottom: theme.spacing(2)
  }
}));

const Timeline = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [posts] = useState(mockData);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <NewPost />
      <div className={classes.posts}>
        {posts.map(post => (
          <PostCard
            className={classes.post}
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  className: PropTypes.string
};

export default Timeline;
