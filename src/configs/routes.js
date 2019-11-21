import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import notifier from 'stores/notifier';
import stores from 'stores';
import param from 'jquery-param';
import history from 'history.js'
import { reject } from 'q';
import CompanyDetail from 'views/CompanyDetail';

const { userStore, companiesStore, loader } = stores


const obj = {
  include: [{
    model: 'company',
    include: [
      {
        model: 'companyEntity'
      },
      {
        model: 'companyCards'
      },
      {
        model: 'companyProgramms'
      },
    ]
  }]
}

const compobj = {
    include: [
      {
        model: 'companyEntities'
      },
      {
        model: 'companyCards'
      },
      {
        model: 'companyProgramms'
      },
    ]
}

// `http://192.168.6.39:1337/api/company/?${param(obj)}`
// routes.js
export default [
    // {
    //   path: '/',
    //   exact: true,
    //   component: () => <Redirect to="/over6view" />
    // },
    {
      path: '/auth',
      exact: true,
      component: lazy(async () => {
        //await new Promise(resolve => setTimeout(resolve, 3000));
        // if(!loader.show) loader.setShow(true)
        return import('views/SignIn')
      })
    },
    {
      path: '/:id',
      exact: true,
      component: lazy(() => import('views/CompanyDetail'))
    },    
    {
      path: '/',
      exact: true,
      component: lazy(async () => {
        //await new Promise(resolve => setTimeout(resolve, 3000));
        // if(!loader.show) loader.setShow(true)
        return import('views/Companies')
      }),
      // component: lazy(async () => {
      //   try {
      //     const { data: { result } } = await axios.get(`http://192.168.6.39:1337/api/user?${param(obj)}`,
      //     {
      //       headers: {
      //         Authorization: 'Bearer ' + JSON.parse(localStorage.CNJ_token).access_token //the token is a variable which holds the token
      //       }
      //     })
      //     // console.log(result)
      //     companiesStore.setProp('companies', result.company)
      //     await userStore.setProp('login', result.username)
      //     await userStore.setProp('balans', result.balans)

      //     return import('views/Companies')
      //     // return import('views/Overview')
      //   } catch (err) {
      //     throw err
      //   }
      // })
    },

    // {
    //   path: '/calendar',
    //   exact: true,
    //   component: lazy(() => import('views/Calendar')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/changelog',
    //   exact: true,
    //   component: lazy(() => import('views/Changelog')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/chat',
    //   exact: true,
    //   component: lazy(() => import('views/Chat')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/dashboards/analytics',
    //   exact: true,
    //   component: lazy(() => import('views/DashboardAnalytics')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/dashboards/default',
    //   exact: true,
    //   component: lazy(() => import('views/DashboardDefault')),
    //   // settings: dashboardRouteSettings
    // },
    // {
    //   path: '/invoices/:id',
    //   exact: true,
    //   component: lazy(() => import('views/InvoiceDetails')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/kanban-board',
    //   exact: true,
    //   component: lazy(() => import('views/KanbanBoard')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/landing',
    //   exact: true,
    //   component: lazy(() => import('views/Landing'))
    // },
    // {
    //   path: '/mail',
    //   exact: true,
    //   component: lazy(() => import('views/Mail')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/management/customers',
    //   exact: true,
    //   component: lazy(() => import('views/CustomerManagementList')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/management/customers/:id/:tab',
    //   exact: true,
    //   component: lazy(() => import('views/CustomerManagementDetails')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/management/customers/:id',
    //   component: () => <Redirect to="/profile/:id/summary" />
    // },
    // {
    //   path: '/management/projects',
    //   exact: true,
    //   component: lazy(() => import('views/ProjectManagementList')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/management/orders',
    //   exact: true,
    //   component: lazy(() => import('views/OrderManagementList')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/management/orders/:id',
    //   exact: true,
    //   component: lazy(() => import('views/OrderManagementDetails')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/errors/error-401',
    //   exact: true,
    //   component: lazy(() => import('views/Error401')),
    //   settings: errorRouteSettings
    // },
     {
      path: '/errors/error-404',
      exact: true,
      component: lazy(() => import('views/Error404')),
      //settings: errorRouteSettings
    },
    // {
    //   path: '/errors/error-500',
    //   exact: true,
    //   component: lazy(() => import('views/Error500')),
    //   settings: errorRouteSettings
    // },
    // {
    //   path: '/overview',
    //   exact: true,
    //   component: lazy(() => import('views/Overview')),
    //   settings: dashboardRouteSettings
    // },
    {
      path: '/profile/:id/:tab',
      exact: true,
      component: lazy(() => import('views/Profile')),
      // settings: dashboardRouteSettings
    },
    // {
    //   path: '/profile/:id',
    //   component: () => <Redirect to="/profile/:id/timeline" />
    // },
    // {
    //   path: '/projects/create',
    //   exact: true,
    //   component: lazy(() => import('views/ProjectCreate')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/projects/:id/:tab',
    //   exact: true,
    //   component: lazy(() => import('views/ProjectDetails')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/projects/:id',
    //   component: () => <Redirect to="/projects/:id/overview" />
    // },
    // {
    //   path: '/projects',
    //   exact: true,
    //   component: lazy(() => import('views/ProjectList')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/settings',
    //   exact: true,
    //   component: () => <Redirect to="/settings/general" />
    // },
    // {
    //   path: '/settings/:tab',
    //   exact: true,
    //   component: lazy(() => import('views/Settings')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/settings',
    //   component: () => <Redirect to="/settings/general" />
    // },
    // {
    //   path: '/social-feed',
    //   exact: true,
    //   component: lazy(() => import('views/SocialFeed')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/development/getting-started',
    //   exact: true,
    //   component: lazy(() => import('views/GettingStarted')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/development/routing',
    //   exact: true,
    //   component: lazy(() => import('views/Routing')),
    //   settings: dashboardRouteSettings
    // },
    // {
    //   path: '/development/code-splitting',
    //   exact: true,
    //   component: lazy(() => import('views/CodeSplitting')),
    //   settings: dashboardRouteSettings
    // },
  {
    component: () => <Redirect to="/errors/error-404" />
  }
]