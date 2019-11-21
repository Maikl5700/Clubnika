import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { ProjectCard } from 'components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  arrowIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const Projects = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [projects] = useState(mockData);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          className={classes.title}
          variant="h5"
        >
          Active Projects
        </Typography>
        <Button
          component={RouterLink}
          to="/profile/user/projects"
        >
          See all
          <KeyboardArrowRightIcon className={classes.arrowIcon} />
        </Button>
      </div>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
