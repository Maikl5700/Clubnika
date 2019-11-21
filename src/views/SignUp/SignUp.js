import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  Avatar
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { Page } from 'components';
import gradients from 'gradients';
import { SignUpForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.orange,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  signUpForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Page title="Sign Up">
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <PersonAddIcon className={classes.icon} />
            <Typography
              gutterBottom
              variant="h3"
            >
              Регистрация
            </Typography>
            <Typography variant="subtitle2">
              Создайте аккаунт для внутренней платформы
            </Typography>
            <SignUpForm className={classes.signUpForm} />
            <Divider className={classes.divider} />
            <Typography
              align="center"
              className={classes.signIn}
              variant="subtitle2"
            >
              Уже есть аккаунт?{' '}
              <Link
                color="secondary"
                component={RouterLink}
                to="/auth/sign-in"
                underline="always"
                variant="h6"
              >
                Войти
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="/images/sign_up.png"
            title="Cover"
          >
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before
              they sold out High Life.
            </Typography>
            <div className={classes.person}>
              <Avatar
                alt="Person"
                className={classes.avatar}
                src="/images/avatars/avatar_2.png"
              />
              <div>
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  Ekaterina Tankova
                </Typography>
                <Typography
                  color="inherit"
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </div>
            </div>
          </CardMedia>
        </Card>
      </div>
    </Page>
  );
};

export default SignUp;
