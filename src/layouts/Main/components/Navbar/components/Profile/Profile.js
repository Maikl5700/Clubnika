import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // const auth = useSelector(state => state.auth);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        // src={auth.user.avatar}
        to="/profile/1/timeline"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {/* {auth.user.first_name} {auth.user.last_name} */}
      </Typography>
      <Typography variant="body2">123{/*{auth.user.bio}*/}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
