import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Header,
  FAQ,
  PluginsSupport,
  SourceFiles,
  UserFlows
} from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Presentation = () => {
  console.log('mounted')
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <UserFlows />
      <PluginsSupport />
      <SourceFiles />
      <FAQ />
    </div>
  );
};

export default Presentation;
