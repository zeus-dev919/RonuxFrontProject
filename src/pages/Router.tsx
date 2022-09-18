import React from "react";
import { useRoutes, RouteObject, Outlet } from "react-router-dom";
import MenuAppbar from "../layout/MenuAppbar";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import SignIn from "./SignIn";
import EmailVerification from "./EmailVerification";
import ResetPassword from "./ResetPassword";
import Users from "./Users";
import Service from "./Service";
import AuthGuard from "../AuthGuard";
import Setting from "./Setting";

function MainLayout() {
  return (
    <>
      <AuthGuard />
      <MenuAppbar />
      <Outlet />
    </>

  );
}

export default function Router() {
  const router: RouteObject[] = [
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verification-email",
      element: <EmailVerification />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/services",
          element: <Service />
        },
        {
          path: "/bookings",
          element: <Setting />
        },
      ],
    },
  ];

  return useRoutes(router);
}
