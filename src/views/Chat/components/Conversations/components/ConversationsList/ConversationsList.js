import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  Avatar,
  colors
} from '@material-ui/core';

import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.white,
    overflow: 'auto'
  },
  activeListItem: {
    boxShadow: `inset 4px 0px 0px ${theme.palette.primary.main}`,
    backgroundColor: colors.grey[50]
  },
  badge: {
    top: 10
  },
  avatar: {
    height: 40,
    width: 40
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  statusBullet: {
    marginLeft: theme.spacing(1)
  },
  date: {
    flexShrink: 0,
    marginLeft: 'auto'
  }
}));

const ConversationsList = props => {
  const { conversations, onSelect, className, ...rest } = props;

  const classes = useStyles();

  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSelect = convesation => {
    setSelectedConversation(convesation);
    onSelect(convesation);
  };

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
      disablePadding
    >
      {conversations.map((conversation, i) => {
        const lastMessage =
          conversation.messages[conversation.messages.length - 1];

        return (
          <ListItem
            button
            className={clsx({
              [classes.activeListItem]:
                selectedConversation &&
                selectedConversation.id === conversation.id
            })}
            divider={i < conversations.length - 1}
            key={conversation.id}
            onClick={() => handleSelect(conversation)}
          >
            <ListItemAvatar>
              <Badge
                badgeContent={conversation.unread}
                classes={{ badge: classes.badge }}
                color="error"
              >
                <Avatar
                  alt="Person"
                  className={classes.avatar}
                  src={conversation.otherUser.avatar}
                />
              </Badge>
            </ListItemAvatar>
            <ListItemText disableTypography>
              <div className={classes.nameWrapper}>
                <Typography
                  noWrap
                  variant="h6"
                >
                  {conversation.otherUser.name}
                </Typography>
                {conversation.otherUser.active && (
                  <StatusBullet
                    className={classes.statusBullet}
                    color="success"
                    size="small"
                  />
                )}
                <Typography
                  className={classes.date}
                  variant="body2"
                >
                  {moment(lastMessage.created_at).isSame(moment(), 'day')
                    ? moment(lastMessage.created_at).format('LT')
                    : moment(lastMessage.created_at).fromNow()}
                </Typography>
              </div>
              <Typography
                color="textSecondary"
                noWrap
                variant="body1"
              >
                {lastMessage.sender.name}: {lastMessage.content}
              </Typography>
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

ConversationsList.propTypes = {
  className: PropTypes.string,
  conversations: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

ConversationsList.defaultProps = {
  onSelect: () => {}
};

export default ConversationsList;
