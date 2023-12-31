import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@/layout/layout")),
    children: [
      {
        path: "/home",
        component: lazy(() => import("@/pages/Home")),
      },
    ]
  },
];

export default routes;
