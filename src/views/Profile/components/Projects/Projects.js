import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { ProjectCard } from 'components';
import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {}
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
      <Grid
        container
        spacing={3}
      >
        {projects.map(project => (
          <Grid
            item
            key={project.id}
            lg={4}
            lx={4}
            md={6}
            xs={12}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
