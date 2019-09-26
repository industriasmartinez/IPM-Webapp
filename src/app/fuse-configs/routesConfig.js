import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse";
import { ExampleConfig } from "app/main/example/ExampleConfig";
import { HomeConfig } from "app/main/home/HomeConfig";
import { LoginConfig } from "app/main/login/LoginConfig";
import { RegisterConfig } from "app/main/register/RegisterConfig";
import { CalendarAppConfig } from "app/main/calendar/CalendarAppConfig";

const routeConfigs = [
  ExampleConfig,
  HomeConfig,
  LoginConfig,
  RegisterConfig,
  CalendarAppConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/home" />
  }
];

export default routes;
