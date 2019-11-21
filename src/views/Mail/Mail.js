import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { EmailFolders, EmailList, EmailDetails } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '@media (max-width: 780px)': {
      '& $emailFolders, & $emailList, & $emailDetails': {
        flexBasis: '100%',
        width: '100%',
        maxWidth: 'none',
        flexShrink: '0',
        transition: 'transform .5s ease',
        transform: 'translateX(0)'
      }
    }
  },
  openFolder: {
    '@media (max-width: 780px)': {
      '& $emailFolders, & $emailList, & $emailDetails': {
        transform: 'translateX(-100%)'
      }
    }
  },
  emailFolders: {
    flexBasis: 280,
    flexShrink: 0,
    flexGrow: 0,
    borderRight: `1px solid ${theme.palette.divider}`
  },
  emailList: {
    flexGrow: 1
  },
  emailDetails: {
    flexGrow: 1
  }
}));

const Mail = () => {
  const classes = useStyles();

  const [emails] = useState(mockData);
  const [openFolder, setOpenFolder] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleFolderOpen = () => {
    setOpenFolder(true);
    setSelectedEmail(null);
  };

  const handleFolderClose = () => {
    setOpenFolder(false);
  };

  const handleEmailOpen = () => {
    setSelectedEmail(emails[0]);
  };

  const handleEmailClose = () => {
    setSelectedEmail(null);
  };

  return (
    <Page title="Mail">
      <div
        className={clsx({
          [classes.root]: true,
          [classes.openFolder]: openFolder
        })}
      >
        <EmailFolders
          className={classes.emailFolders}
          onFolderOpen={handleFolderOpen}
        />
        {selectedEmail ? (
          <EmailDetails
            className={classes.emailDetails}
            email={selectedEmail}
            onEmailClose={handleEmailClose}
          />
        ) : (
          <EmailList
            className={classes.emailList}
            emails={emails}
            onBack={handleFolderClose}
            onEmailOpen={handleEmailOpen}
          />
        )}
      </div>
    </Page>
  );
};

export default Mail;
