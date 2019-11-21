/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const dashboardRouteSettings = {
  auth: ['ADMIN'],
  layout: {
    topbar: {
      display: true
    },
    navbar: {
      display: true
    },
    connections: {
      display: true
    }
  }
};

const errorRouteSettings = {
  layout: {
    topbar: {
      display: true
    }
  }
};

const authRouteSettings = {
  layout: {
    topbar: {
      display: true
    }
  }
};

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/calendar',
    exact: true,
    component: lazy(() => import('views/Calendar')),
    settings: dashboardRouteSettings
  },
  {
    path: '/changelog',
    exact: true,
    component: lazy(() => import('views/Changelog')),
    settings: dashboardRouteSettings
  },
  {
    path: '/chat',
    exact: true,
    component: lazy(() => import('views/Chat')),
    settings: dashboardRouteSettings
  },
  {
    path: '/dashboards/analytics',
    exact: true,
    component: lazy(() => import('views/DashboardAnalytics')),
    settings: dashboardRouteSettings
  },
  {
    path: '/dashboards/default',
    exact: true,
    component: lazy(() => import('views/DashboardDefault')),
    settings: dashboardRouteSettings
  },
  {
    path: '/invoices/:id',
    exact: true,
    component: lazy(() => import('views/InvoiceDetails')),
    settings: dashboardRouteSettings
  },
  {
    path: '/kanban-board',
    exact: true,
    component: lazy(() => import('views/KanbanBoard')),
    settings: dashboardRouteSettings
  },
  {
    path: '/landing',
    exact: true,
    component: lazy(() => import('views/Landing'))
  },
  {
    path: '/mail',
    exact: true,
    component: lazy(() => import('views/Mail')),
    settings: dashboardRouteSettings
  },
  {
    path: '/management/customers',
    exact: true,
    component: lazy(() => import('views/CustomerManagementList')),
    settings: dashboardRouteSettings
  },
  {
    path: '/management/customers/:id/:tab',
    exact: true,
    component: lazy(() => import('views/CustomerManagementDetails')),
    settings: dashboardRouteSettings
  },
  {
    path: '/management/customers/:id',
    component: () => <Redirect to="/profile/:id/summary" />
  },
  {
    path: '/management/projects',
    exact: true,
    component: lazy(() => import('views/ProjectManagementList')),
    settings: dashboardRouteSettings
  },
  {
    path: '/management/orders',
    exact: true,
    component: lazy(() => import('views/OrderManagementList')),
    settings: dashboardRouteSettings
  },
  {
    path: '/management/orders/:id',
    exact: true,
    component: lazy(() => import('views/OrderManagementDetails')),
    settings: dashboardRouteSettings
  },
  {
    path: '/errors/error-401',
    exact: true,
    component: lazy(() => import('views/Error401')),
    settings: errorRouteSettings
  },
  {
    path: '/errors/error-404',
    exact: true,
    component: lazy(() => import('views/Error404')),
    settings: errorRouteSettings
  },
  {
    path: '/errors/error-500',
    exact: true,
    component: lazy(() => import('views/Error500')),
    settings: errorRouteSettings
  },
  {
    path: '/overview',
    exact: true,
    component: lazy(() => import('views/Overview')),
    settings: dashboardRouteSettings
  },
  {
    path: '/presentation',
    exact: true,
    component: lazy(() => import('views/Presentation')),
    settings: dashboardRouteSettings
  },
  {
    path: '/profile/:id/:tab',
    exact: true,
    component: lazy(() => import('views/Profile')),
    settings: dashboardRouteSettings
  },
  {
    path: '/profile/:id',
    component: () => <Redirect to="/profile/:id/timeline" />
  },
  {
    path: '/projects/create',
    exact: true,
    component: lazy(() => import('views/ProjectCreate')),
    settings: dashboardRouteSettings
  },
  {
    path: '/projects/:id/:tab',
    exact: true,
    component: lazy(() => import('views/ProjectDetails')),
    settings: dashboardRouteSettings
  },
  {
    path: '/projects/:id',
    component: () => <Redirect to="/projects/:id/overview" />
  },
  {
    path: '/projects',
    exact: true,
    component: lazy(() => import('views/ProjectList')),
    settings: dashboardRouteSettings
  },
  {
    path: '/settings',
    exact: true,
    component: () => <Redirect to="/settings/general" />
  },
  {
    path: '/settings/:tab',
    exact: true,
    component: lazy(() => import('views/Settings')),
    settings: dashboardRouteSettings
  },
  {
    path: '/settings',
    component: () => <Redirect to="/settings/general" />
  },
  {
    path: '/auth/sign-in',
    exact: true,
    component: lazy(() => import('views/SignIn')),
    settings: authRouteSettings
  },
  {
    path: '/auth/sign-up',
    exact: true,
    component: lazy(() => import('views/SignUp')),
    settings: authRouteSettings
  },
  {
    path: '/social-feed',
    exact: true,
    component: lazy(() => import('views/SocialFeed')),
    settings: dashboardRouteSettings
  },
  {
    path: '/development/getting-started',
    exact: true,
    component: lazy(() => import('views/GettingStarted')),
    settings: dashboardRouteSettings
  },
  {
    path: '/development/routing',
    exact: true,
    component: lazy(() => import('views/Routing')),
    settings: dashboardRouteSettings
  },
  {
    path: '/development/code-splitting',
    exact: true,
    component: lazy(() => import('views/CodeSplitting')),
    settings: dashboardRouteSettings
  },
  {
    component: () => <Redirect to="/errors/error-404" />
  }
];

export default routesConfig;
