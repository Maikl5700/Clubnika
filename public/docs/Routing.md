### Introduction

A Routing System is required in every medium and large scale product for multiples reasons:

- Standardized app structure and behavior, useful when working in a team
- Viewing declarations in a standardized structure helps us to instantly understand what are our app views
- Routes are generated, stored and fetched using a backend service
- Allow modularity building dynamic pages using a settings manager or config files
- Fast prototyping
- Switch from normal component loading to Lazy component loading in seconds

### Example

Here is a small example of how we should define a config file. We use `react-router-config` so we are only allowed to use `component` and not `render`.

```javascript
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import SignUp from 'views/SignUp';
import Calendar from 'views/Calendar';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/auth/sign-up',
    exact: true,
    component: SignUp,
    settings: {
      layout: {
        topbar: {
          display: true
        }
      }
    }
  },
  {
    path: '/calendar',
    exact: true,
    component: Calendar,
    settings: {
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
    }
  }
];

export default routesConfig;
```

- `settings` object is optional. If we don't define it, default settings are applied

- `layout` object defines what we will see on every view. If it is not defined, default layout settings are applied

- `auth` property can be an array or `undefined`. If defined, the user is required to be authenticated. If he's not, he will be redirect to `/auth/sign-in`. On the `/calendar` route we defined `auth` property. It means that this route will require the use role "ADMIN". If the authenticated user is other than ADMIN he will be redirected to `/errors/error-401`

### How it works

Under the hood, we still use `Router`, `Switch` and `Routes` from `react-router-dom`.

In the `App.js` we pass the `routesConfig` from `configs/routesConfig.js` to the `LayoutManager`.
Based on our config file, the LayoutManager determines what layout to use and what settings are applied for each route based on route matching.

### In future updates

We plan to extend the usage of the settings object and add more options. Such as Navbar position, style, theme, etc.
