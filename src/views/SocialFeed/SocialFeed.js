import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page, PostCard, NewPost } from 'components';
import { Header } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  newPost: {
    marginTop: theme.spacing(3)
  },
  posts: {
    marginTop: theme.spacing(3)
  },
  post: {
    marginBottom: theme.spacing(3)
  }
}));

const SocialFeed = () => {
  const classes = useStyles();

  const [posts] = useState(mockData);

  return (
    <Page title="Social Feed">
      <div className={classes.root}>
        <Header />
        <NewPost className={classes.newPost} />
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
    </Page>
  );
};

export default SocialFeed;
