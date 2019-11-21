import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page, Alert } from 'components';
import { useRouter } from 'hooks';
import { Header, Overview, Files, Activities, Subscribers } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  alert: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const ProjectDetails = () => {
  const classes = useStyles();

  const [project] = useState(mockData);
  const [openAlert, setOpenAlert] = useState(true);

  const router = useRouter();

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleTabsChange = (event, value) => {
    router.history.push(value);
  };

  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'files', label: 'Files' },
    { value: 'activity', label: 'Activity' },
    { value: 'subscribers', label: 'Subscribers' }
  ];

  const tab = router.match.params.tab;

  return (
    <Page title="Project Details">
      <div className={classes.root}>
        <Header project={project} />
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={tab}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        {openAlert && (
          <Alert
            className={classes.alert}
            message="The content holder has extended the deadline! Good luck"
            onClose={handleAlertClose}
          />
        )}
        <div className={classes.content}>
          {tab === 'overview' && <Overview project={project} />}
          {tab === 'files' && <Files files={project.files} />}
          {tab === 'activity' && <Activities activities={project.activities} />}
          {tab === 'subscribers' && (
            <Subscribers subscribers={project.subscribers} />
          )}
        </div>
      </div>
    </Page>
  );
};

export default ProjectDetails;
