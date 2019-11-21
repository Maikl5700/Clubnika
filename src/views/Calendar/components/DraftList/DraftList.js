import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Draggable } from '@fullcalendar/interaction';
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const DraftList = props => {
  const { children, className } = props;

  const classes = useStyles();

  const draftContainerRef = useRef(null);

  useEffect(() => {
    new Draggable(draftContainerRef.current, {
      itemSelector: '.fc-draft-event',
      eventData: function(eventEl) {
        const data = eventEl.getAttribute('data');

        return JSON.parse(data);
      }
    });
  }, []);

  return (
    <List
      className={clsx(classes.root, className)}
      disablePadding
      ref={draftContainerRef}
    >
      {children}
    </List>
  );
};

DraftList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DraftList;
