import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

import { Navbar, Topbar, Connections, PricingModal } from './components';
import { pricingModalClose } from 'store/actions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
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
    maxHeight: '100%'
  }
}));

const Main = props => {
  const { settings, routes } = props;

  const layoutConfig = settings.layout;

  const classes = useStyles();

  // const dispatch = useDispatch();
  // const pricingModal = useSelector(state => state.pricingModal);


  // const handlePricingModalClose = () => {
  //   dispatch(pricingModalClose());
  // };

  return (
    <div className={classes.root}>
      {layoutConfig.topbar.display && <Topbar className={classes.topbar} />}
      <div className={classes.container}>
        {layoutConfig.navbar.display && <Navbar className={classes.navbar} />}
        <main className={classes.content}>
          <Suspense
            fallback={
              <div>
                <LinearProgress color="secondary" />
              </div>
            }
          >
            {renderRoutes(routes)}
          </Suspense>
        </main>
      </div>
      {layoutConfig.connections.display && <Connections />}
      {/* <PricingModal
        onClose={handlePricingModalClose}
        open={pricingModal.open}
      /> */}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  routes: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};

export default Main;
