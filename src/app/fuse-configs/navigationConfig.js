const navigationConfig = [
  {
    id: "applications",
    title: "APLICACIONES",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "example-component",
        title: "Example",
        type: "item",
        icon: "whatshot",
        url: "/example"
      },
      {
        id: "home-component",
        title: "Home",
        type: "item",
        icon: "home",
        url: "/home",
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
        url: "/apps/calendar"
      }
    ]
  }
];

export default navigationConfig;
