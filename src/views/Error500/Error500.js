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

const Error500 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        algin="center"
        variant="h1"
      >
        500: Ooops, something went terribly wrong!
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
        src="/images/undraw_server_down_s4lk.svg"
      />
    </div>
  );
};

export default Error500;
