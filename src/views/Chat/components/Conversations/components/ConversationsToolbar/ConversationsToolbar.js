import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Input, IconButton, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  searchInput: {
    flexGrow: 1
  }
}));

const ConversationsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Input
        className={classes.searchInput}
        disableUnderline
        placeholder="Search contacts"
      />
      <Tooltip title="Search">
        <IconButton edge="end">
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

ConversationsToolbar.propTypes = {
  className: PropTypes.string
};

export default ConversationsToolbar;
