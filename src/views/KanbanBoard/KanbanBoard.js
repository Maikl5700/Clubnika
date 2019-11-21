import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, TaskList, TaskItem, TaskDetails } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 3, 3, 1),
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  }
}));

const KanbanBoard = () => {
  const classes = useStyles();

  const [lists, setLists] = useState(mockData.lists);
  const [groupedTasks, setGroupedTasks] = useState(() => {
    const groupedTasks = {};

    for (const list of mockData.lists) {
      groupedTasks[list.id] = [];
    }

    for (const task of mockData.tasks) {
      if (groupedTasks[task.list]) {
        groupedTasks[task.list].push(task);
      }
    }

    return groupedTasks;
  });
  const [openedTask, setOpenedTask] = useState(null);

  const handleDragEnd = event => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    const groupedTasksClone = _.clone(groupedTasks);

    if (source.droppableId === destination.droppableId) {
      // Reorder the source list
      const sourceList = groupedTasksClone[source.droppableId];
      const [removedItem] = sourceList.splice(source.index, 1);

      sourceList.splice(destination.index, 0, removedItem);
      setGroupedTasks(groupedTasksClone);
    } else {
      // Move from source list to destination list
      const sourceList = groupedTasksClone[source.droppableId];
      const destinationList = groupedTasksClone[destination.droppableId];
      const [removedTask] = sourceList.splice(source.index, 1);

      removedTask.list = destination.droppableId;
      destinationList.splice(destination.index, 0, removedTask);
      setGroupedTasks(groupedTasksClone);
    }
  };

  const handleListAdd = () => {
    const list = {
      id: uuid(),
      title: 'New list'
    };

    setLists(lists => [...lists, list]);

    setGroupedTasks(groupedTasks => {
      const groupedTasksClone = _.clone(groupedTasks);

      groupedTasksClone[list.id] = [];

      return groupedTasksClone;
    });
  };

  const handleTaskOpen = task => {
    setOpenedTask(task);
  };

  const handleTaskClose = () => {
    setOpenedTask(null);
  };

  const renderTasks = (list = []) => {
    const tasks = list.map((task, index) => (
      <Draggable
        draggableId={task.id}
        index={index}
        key={task.id}
      >
        {(provided, snapshot) => (
          <TaskItem
            onOpen={() => handleTaskOpen(task)}
            provided={provided}
            snapshot={snapshot}
            task={task}
          />
        )}
      </Draggable>
    ));

    return tasks;
  };

  return (
    <Page title="Kanban Board">
      <div className={classes.root}>
        <Header onListAdd={handleListAdd} />
        <div className={classes.content}>
          <DragDropContext onDragEnd={handleDragEnd}>
            {lists.map(list => (
              <Droppable
                droppableId={list.id}
                key={list.id}
              >
                {(provided, snapshot) => (
                  <TaskList
                    color={list.color}
                    provided={provided}
                    snapshot={snapshot}
                    title={list.title}
                    total={groupedTasks[list.id].length}
                  >
                    {renderTasks(groupedTasks[list.id])}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
        <TaskDetails
          onClose={handleTaskClose}
          open={Boolean(openedTask)}
          task={openedTask}
        />
      </div>
    </Page>
  );
};

export default KanbanBoard;
