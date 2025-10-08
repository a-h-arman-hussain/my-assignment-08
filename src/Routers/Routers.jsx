import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    HydrateFallback: <p>Loading........</p>,
    children: [
      { index: true, Component: Home },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
