import React from "react";
import { useRoutes, RouteObject, Outlet } from "react-router-dom";
import MenuAppbar from "../layout/MenuAppbar";
import AdminConsole from "./AdminConsole";
import ForgotPassword from "./ForgotPassword";
import PrivacyTerms from "./PrivacyTerms";
import RonuxAdmin from "./RonuxAdmin";
import SignIn from "./SignIn";
import UserConsole from "./UserConsole";
import EmailVerification from "./EmailVerification";
import ResetPassword from "./ResetPassword";
import ClientProfile from './profile/ClientProfile';
import FreelancerProfile from "./profile/Freelancerprofile";
import BlockedIP from "./blocked/BlockedIP";
import BlockedKeyword from "./blocked/BlockedKeyword";
import AdminActivityLog from "./activityLog/admin";
import UserActivityLog from "./activityLog/user";
import OccupationAndSkills from "./occupationAndSkills/OccupationAndSkills";
import ReviewID from "./Review/ReviewID";
import ReviewFreelancer from "./Review/ReviewFreelancer";
import JobDetails from "./Review/JobDetails";
import ReviewReport from "./report/ReviewReport";

function MainLayout() {
  return (
    <>
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
          element: <RonuxAdmin />,
        },
        {
          path: "terms",
          element: <PrivacyTerms />,
        },
        {
          path: "admins",
          element: <AdminConsole />,
        },
        {
          path: "users",
          element: <UserConsole />,
        },
        {
          path: "/users/client",
          element: <ClientProfile />
        },
        {
          path: "/users/freelancer",
          element: <FreelancerProfile />
        },
        {
          path: "/blocked-ips",
          element: <BlockedIP />
        },
        {
          path: "/blocked-keywords",
          element: <BlockedKeyword />
        },
        {
          path: "/activity-admins",
          element: <AdminActivityLog />
        },
        {
          path: "/activity-users",
          element: <UserActivityLog />
        },
        {
          path: "/skills",
          element: <OccupationAndSkills />
        },
        {
          path: "/identities",
          element: <ReviewID />
        },
        {
          path: "/freelancers",
          element: <ReviewFreelancer />
        },
        {
          path: "/jobs",
          element: <JobDetails />
        },
        {
          path: "/reports",
          element: <ReviewReport />
        },
      ],
    },
  ];

  return useRoutes(router);
}
