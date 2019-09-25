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
      }
    ]
  }
];

export default navigationConfig;
