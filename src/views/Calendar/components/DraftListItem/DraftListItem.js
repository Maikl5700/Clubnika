import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ListItem, ListItemText, IconButton, colors } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    borderLeftStyle: 'solid',
    borderLeftWidth: 4,
    borderLeftColor: colors.blueGrey[500],
    cursor: 'pointer',
    '&.fc-dragging': {
      opacity: 0.8
    }
  }
}));

const DraftEvent = props => {
  const { event, className, ...rest } = props;

  const classes = useStyles();

  return (
    <ListItem
      {...rest}
      className={clsx('fc-draft-event', classes.root, className)}
      data={JSON.stringify(event)}
      key={event.id}
      style={{ borderLeftColor: event.color }}
    >
      <ListItemText
        primary={event.title}
        secondary={event.desc}
      />
      <IconButton
        edge="end"
        size="small"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

DraftEvent.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object.isRequired
};

export default DraftEvent;
