import React, { Suspense, Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { renderRoutes } from "react-router-config";

import Topbar from 'layouts/Main/components/Topbar';
import Navbar from 'layouts/Main/components/Navbar';
import './assets/scss/index.scss';
import { observer, inject } from 'mobx-react';
import Notifier from './Notifier';
import Dialog from './Dialog';
import CircularLoader from './components/CircularLoader';
import req from './request';
import stores from './stores';
import { useHistory } from 'react-router-dom';

window.recaptchaRef = React.createRef();
let pathname = ""


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  topbar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto'
  },
  navbar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    flex: '1 1 auto',
    maxHeight: '100%',
    position: 'relative'
  }
}));

const ProtectedRoutes = ({ routes }) => {
  const { userStore, loader, companiesStore } = stores
  let history = useHistory()
  if(!pathname) pathname = window.location.pathname
  
    if(userStore.auth
      || window.location.pathname === '/auth')
    { 
      console.log('1')
      //console.log(history)
      loader.setShow(true)
      return renderRoutes(routes)
    }
    else if(localStorage.CNJ_token){
      console.log('2')
      req.request({
        method: 'get',
        url: '/'
      })
      .then(res => {
        userStore.setAuth(true)
        loader.setShow(true)
        history.push(pathname) // DEFAULT ROUTE
      })
      .catch(err => {
        console.log(err)
        loader.setShow(true)
        history.push('/auth')
      })
    } else {
      console.log('3')
      loader.setShow(true)
      history.push('/auth')
    } 

  return null
}


const App = ({ routes, auth }) => {

  const classes = useStyles();
  
  return (
    <Fragment>
      <div className={classes.root}>
        {!!auth && <Topbar auth={auth} className={classes.topbar}/>}
        <div className={classes.container}>
          {!!auth && <Navbar className={classes.navbar}/>}
          <main className={classes.content}>
            <CircularLoader/>
            <Suspense fallback={""}> 
              {/* CONTENT */}
              <ProtectedRoutes
                routes={routes}
              />
            </Suspense>
          </main>
        </div>
      </div>
      <Notifier/>
      <Dialog/>
    </Fragment>
  );
};

export default inject(stores => ({ auth: Number(stores.userStore.auth) }))(observer(App));

