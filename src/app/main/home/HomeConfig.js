import Home from "./Home";
import { authRoles } from "app/auth";

export const HomeConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  auth: authRoles.user,
  routes: [
    {
      path: "/home",
      component: Home
    }
  ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
