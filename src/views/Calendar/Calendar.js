import React, { useState, useRef } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import { makeStyles } from '@material-ui/styles';
import { Modal, Card, CardContent, colors } from '@material-ui/core';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

import { Page } from 'components';
import { AddEditEvent, Toolbar } from './components';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(3),
    '& .fc-unthemed td': {
      borderColor: theme.palette.divider
    },
    '& .fc-widget-header': {
      backgroundColor: colors.grey[50]
    },
    '& .fc-axis': {
      ...theme.typography.body2
    },
    '& .fc-list-item-time': {
      ...theme.typography.body2
    },
    '& .fc-list-item-title': {
      ...theme.typography.body1
    },
    '& .fc-list-heading-main': {
      ...theme.typography.h6
    },
    '& .fc-list-heading-alt': {
      ...theme.typography.h6
    },
    '& .fc th': {
      borderColor: theme.palette.divider
    },
    '& .fc-day-header': {
      ...theme.typography.subtitle2,
      fontWeight: 500,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: colors.grey[50]
    },
    '& .fc-day-top': {
      ...theme.typography.body2
    },
    '& .fc-highlight': {
      backgroundColor: colors.blueGrey[50]
    },
    '& .fc-event': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderWidth: 2,
      opacity: 0.9,
      '& .fc-time': {
        ...theme.typography.h6,
        color: 'inherit'
      },
      '& .fc-title': {
        ...theme.typography.body1,
        color: 'inherit'
      }
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1
    }
  },
  card: {
    marginTop: theme.spacing(3)
  }
}));

const Calendar = () => {
  const classes = useStyles();

  const calendarRef = useRef(null);

  const [view, setView] = useState('dayGridMonth');
  const [date, setDate] = useState(moment('2019-07-30 08:00:00').toDate());
  const [draftEvents, setDraftEvents] = useState(data.draft); // Currently unused. We will add the Draft in the next update
  const [calendarEvents, setCalendarEvents] = useState(data.calendar);
  const [modal, setModal] = useState({
    open: false,
    event: null
  });
  const calendarWeekends = true;

  const handleEventClick = info => {
    const selected = calendarEvents.find(event => event.id === info.event.id);

    setModal({
      open: true,
      event: selected
    });
  };

  const handleEventNew = () => {
    setModal({
      open: true,
      event: null
    });
  };

  const handleDrop = event => {
    let data = event.draggedEl.getAttribute('data');

    data = JSON.parse(data);

    setDraftEvents(draftEvents.filter(event => event.id !== data.id));
  };

  const handleEventDelete = event => {
    setCalendarEvents(calendarEvents =>
      calendarEvents.filter(e => e.id !== event.id)
    );
    setDraftEvents(draftEvents => [...draftEvents, event]);

    setModal({
      open: false,
      event: null
    });
  };

  const handleModalClose = () => {
    setModal({
      open: false,
      event: null
    });
  };

  const handleEventAdd = event => {
    setCalendarEvents(calendarEvents => [...calendarEvents, event]);
    setModal({
      open: false,
      event: null
    });
  };

  const handleEventEdit = event => {
    setCalendarEvents(calendarEvents =>
      calendarEvents.map(e => (e.id === event.id ? event : e))
    );

    setModal({
      open: false,
      event: null
    });
  };

  const handleDateToday = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.today();
    setDate(calendarApi.getDate());
  };

  const handleViewChange = view => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.changeView(view);
    setView(view);
  };

  const handleDatePrev = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.prev();
    setDate(calendarApi.getDate());
  };

  const handleDateNext = () => {
    const calendarApi = calendarRef.current.getApi();

    calendarApi.next();
    setDate(calendarApi.getDate());
  };

  return (
    <Page title="Calendar">
      <div className={classes.root}>
        <Toolbar
          date={date}
          onDateNext={handleDateNext}
          onDatePrev={handleDatePrev}
          onDateToday={handleDateToday}
          onEventAdd={handleEventNew}
          onViewChange={handleViewChange}
          view={view}
        />
        <Card className={classes.card}>
          <CardContent>
            <FullCalendar
              allDayMaintainDuration
              defaultDate={date}
              defaultView={view}
              drop={handleDrop}
              droppable
              editable
              eventClick={handleEventClick}
              eventResizableFromStart
              events={calendarEvents}
              header={false}
              height={800}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
                timelinePlugin
              ]}
              ref={calendarRef}
              rerenderDelay={10}
              selectable
              weekends={calendarWeekends}
            />
          </CardContent>
        </Card>
      </div>
      <Modal
        onClose={handleModalClose}
        open={modal.open}
      >
        <AddEditEvent
          event={modal.event}
          onAdd={handleEventAdd}
          onCancel={handleModalClose}
          onDelete={handleEventDelete}
          onEdit={handleEventEdit}
        />
      </Modal>
    </Page>
  );
};

export default Calendar;
