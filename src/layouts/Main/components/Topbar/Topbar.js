import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Button,
  Toolbar,
  colors
} from '@material-ui/core';
import { 
  Input as InputIcon
} from '@material-ui/icons';
import stores from 'stores';
import history from 'history.js';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  signOutIcon: {
    marginRight: theme.spacing(1)
  }
}));


const Topbar = props => {
  // console.log(props)

  const { className, ...rest } = props;
  const classes = useStyles();


  const handleSignOut = () => {
    const { userStore } = stores
    history.push('/auth');
    userStore.setAuth(false)
    localStorage.removeItem('CNJ_token')
  };

  const goHome = () => {
    history.push('/')
  }


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={goHome}
        >
          <img
            style={{
              display: 'block',
              width: 50,
              height: 50,
              marginRight: 5
            }}
            alt="Logo"
            src="/images/logos/logo.png"
          />
          <h2 style={{
            color: '#fff',
            fontSize: 28,
            fontWeight: 500,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
          }}>ClubNika</h2>
        </div>
        <div className={classes.flexGrow} />
        {!!props.auth && (
          <Button
            className={classes.signOutButton}
            color="inherit"
            onClick={handleSignOut}
          >
            <InputIcon className={classes.signOutIcon} />
            Выход
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};



Topbar.propTypes = {
  className: PropTypes.string,
  onNavbarOpen: PropTypes.func,
  onPricingOpen: PropTypes.func
};

export default Topbar;
