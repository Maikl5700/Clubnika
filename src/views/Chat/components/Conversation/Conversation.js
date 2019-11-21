import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

import {
  ConversationToolbar,
  ConversationMessages,
  ConversationForm
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.white
  }
}));

const Conversation = props => {
  const { conversation, onBack, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <ConversationToolbar
        conversation={conversation}
        onBack={onBack}
      />
      <Divider />
      <ConversationMessages messages={conversation.messages} />
      <Divider />
      <ConversationForm />
    </div>
  );
};

Conversation.propTypes = {
  className: PropTypes.string,
  conversation: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired
};

Conversation.defaultProps = {
  onBack: () => {}
};

export default Conversation;
