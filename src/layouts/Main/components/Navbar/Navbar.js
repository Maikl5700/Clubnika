import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider, Paper } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import Navigation from 'components/Navigation';
import Profile from './components/Profile';
import navigationConfig from 'configs/navigationConfig';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflowY: 'auto'
  },
  content: {
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const Navbar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();


  const navbarContent = (
    <div className={classes.content}>
      <Profile />
      <Divider className={classes.divider} />
      <nav className={classes.navigation}>
        {navigationConfig.map(list => (
          <Navigation
            component="div"
            key={list.title}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          // onClose={handleMobileClose}
          // open={navbar.mobileOpen}
          variant="temporary"
        >
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

Navbar.propTypes = {
  className: PropTypes.string
};

export default Navbar;
