import React from "react";
import { authRoles } from "app/auth";

export const CalendarAppConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  auth: authRoles.user,
  routes: [
    {
      path: "/apps/calendar",
      component: React.lazy(() => import("./CalendarApp"))
    }
  ]
};
