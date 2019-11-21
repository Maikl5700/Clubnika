import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

import { ConversationsToolbar, ConversationsList } from './components';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Conversations = props => {
  const { conversations, onSelect, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <ConversationsToolbar />
      <Divider />
      <ConversationsList
        conversations={conversations}
        onSelect={onSelect}
      />
    </div>
  );
};

Conversations.propTypes = {
  className: PropTypes.string,
  conversations: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

Conversations.defaultProps = {
  onSelect: () => {}
};

export default Conversations;
