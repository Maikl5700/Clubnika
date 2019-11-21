import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate, AdvanceSearch } from 'components';
import { Header, ProjectCard } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const ProjectManagementList = () => {
  const classes = useStyles();

  const [fetch, setFetch] = useState(true);
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        setFetch(false);
        setProjects(mockData);
      }
    }, 200);

    return () => {
      mounted = false;
    };
  }, [fetch]);

  // eslint-disable-next-line no-unused-vars
  const handleSearch = query => {
    setFetch(true);
  };

  const showProjects = !fetch && projects;

  return (
    <Page title="Manage Projects">
      <div className={classes.root}>
        <Header />
        <AdvanceSearch
          onFilter={handleSearch}
          onSearch={handleSearch}
        />
        {showProjects && (
          <div className={classes.results}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {projects.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(projects.length / rowsPerPage)}
            </Typography>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}
        <div className={classes.paginate}>
          <Paginate pageCount={3} />
        </div>
      </div>
    </Page>
  );
};

export default ProjectManagementList;
