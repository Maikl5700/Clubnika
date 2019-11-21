import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 150,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  image: {
    display: 'inline-block',
    marginTop: 50,
    maxWidth: '100%',
    width: 560
  }
}));

const Error404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        algin="center"
        variant="h1"
      >
        401: We are sorry but we are not able to authenticate you.
      </Typography>
      <Typography
        algin="center"
        variant="subtitle2"
      >
        You either tried some shady route or you came here by mistake. Whichever
        it is, try using the navigation
      </Typography>
      <img
        alt="Under development"
        className={classes.image}
        src="/images/undraw_authentication_fsn5.svg"
      />
    </div>
  );
};

export default Error404;
