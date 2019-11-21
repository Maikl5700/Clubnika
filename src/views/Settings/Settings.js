import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { useRouter } from 'hooks';
import {
  Header,
  General,
  Subscription,
  Notifications,
  Security
} from './components';

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
  content: {
    marginTop: theme.spacing(3)
  }
}));

const Settings = () => {
  const classes = useStyles();

  const router = useRouter();

  const handleTabsChange = (event, value) => {
    router.history.push(value);
  };

  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'security', label: 'Security' }
  ];

  const tab = router.match.params.tab;

  return (
    <Page title="Settings">
      <div className={classes.root}>
        <Header />
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
        <div className={classes.content}>
          {tab === 'general' && <General />}
          {tab === 'subscription' && <Subscription />}
          {tab === 'notifications' && <Notifications />}
          {tab === 'security' && <Security />}
        </div>
      </div>
    </Page>
  );
};

export default Settings;
