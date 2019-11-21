import React from 'react';
import { matchRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import { useRouter } from 'hooks';
import Main from 'layouts/Main';

const defaultSettings = {
  layout: {
    navbar: {
      display: false
    },
    topbar: {
      display: false
    },
    connections: {
      display: false
    }
  }
};

const LayoutManager = props => {
  const { routes } = props;

  // const router = useRouter();

  // let settings = defaultSettings;
  // const matched = matchRoutes(routes, router.location.pathname)[0];

  // if (matched && matched.route.settings) {
  //   const routeSettings = _.merge({}, defaultSettings, matched.route.settings);

  //   if (!_.isEqual(settings, routeSettings)) {
  //     settings = _.merge({}, routeSettings);
  //   }
  // }

  const Component = Main;

  return (
    <Component
      {...props}
      // routes={routes}
      // settings={settings} //
    />
  );
};

LayoutManager.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array.isRequired
};

export default LayoutManager;

// TODO:
//   Determine layout component from route settings
//   Determine default settings for each layout component
