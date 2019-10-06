import { authRoles } from "app/auth";

const navigationConfig = [
  {
    id: "applications",
    title: "Applications",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Example",
        type: "item",
        icon: "whatshot",
        url: "/example",
        auth: authRoles.user,
      },
      {
        id: "home-component",
        title: "Home",
        type: "item",
        icon: "home",
        url: "/home",
        auth: authRoles.user,
        badge: {
          title: 2,
          bg: "red",
          fg: "#FFFFFF"
        }
      },
      {
        id: "calendar-component",
        title: "Calendar",
        type: "item",
        icon: "calendar_today",
        url: "/apps/calendar",
        auth: authRoles.user,
      }
    ]
  }
];

export default navigationConfig;
