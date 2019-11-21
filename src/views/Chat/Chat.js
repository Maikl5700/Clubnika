import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Conversations, Conversation, Placeholder } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '@media (max-width: 863px)': {
      '& $conversations, & $conversation': {
        flexBasis: '100%',
        width: '100%',
        maxWidth: 'none',
        flexShrink: '0',
        transition: 'transform .5s ease',
        transform: 'translateX(0)'
      }
    }
  },
  openConversion: {
    '@media (max-width: 863px)': {
      '& $conversations, & $conversation': {
        transform: 'translateX(-100%)'
      }
    }
  },
  conversations: {
    width: 300,
    flexBasis: 300,
    flexShrink: 0,
    '@media (min-width: 864px)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  conversation: {
    flexGrow: 1
  },
  placeholder: {
    flexGrow: 1
  }
}));

const Chat = () => {
  const classes = useStyles();

  const [openConversion, setOpenConversation] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations] = useState(mockData);

  const handleConversationOpen = conversation => {
    setSelectedConversation(conversation);
    setOpenConversation(true);
  };

  const handleConversationClose = () => {
    setOpenConversation(false);
  };

  return (
    <Page title="Chat">
      <div
        className={clsx({
          [classes.root]: true,
          [classes.openConversion]: openConversion
        })}
      >
        <Conversations
          className={classes.conversations}
          conversations={conversations}
          onSelect={handleConversationOpen}
        />
        {selectedConversation ? (
          <Conversation
            className={classes.conversation}
            conversation={selectedConversation}
            onBack={handleConversationClose}
          />
        ) : (
          <Placeholder className={classes.placeholder} />
        )}
      </div>
    </Page>
  );
};

export default Chat;
