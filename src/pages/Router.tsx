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
import Profile from './profile'
import BlockedIP from "./blocked/BlockedIP";
import BlockedKeyword from "./blocked/BlockedKeyword";
import AdminActivityLog from "./activityLog/admin";
import UserActivityLog from "./activityLog/user";
import OccupationAndSkills from "./occupationAndSkills/OccupationAndSkills";
import ReviewID from "./Review/ReviewID";
import ReviewFreelancer from "./Review/ReviewFreelancer";
import ReviewReport from "./report/ReviewReport";
import AppRelease from "./AppRelease";
import Job from "./Review/Job";
import Contract from "./jobContract/Contract";
import Proposal from "./proposal/Proposal";
import Invitation from "./invitation/Invitation";
import UserFeedback from "./userFeedback/UserFeedback";
import Help from "./Help";
import Blog from "./Blog";
import MediationCenter from "./dispute/MediationCenter";
import TransactionHistory from "./TransactionHistory";
import JobDetails from "./Review/JobDetails";
import ReportedJob from "./report/ReportedJob";
import MoneyManage from "./MoneyManage";
import DataAnalysis from "./DataAnalysis";

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
          path: "/users/:username",
          element: <Profile />
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
          element: <Job />
        },
        {
          path: "/jobs/:job-id",
          element: <JobDetails />
        },
        {
          path: "/reports",
          element: <ReviewReport />
        },
        {
          path: "/reports/:report-id",
          element: <ReportedJob />
        },
        {
          path: "/releases",
          element: <AppRelease />
        },
        {
          path: "/contracts",
          element: <Contract />
        },
        {
          path: "/proposals",
          element: <Proposal />
        },
        {
          path: "/invitations",
          element: <Invitation />
        },
        {
          path: "/feedback",
          element: <UserFeedback />
        },
        {
          path: "/docs",
          element: <Help />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/disputes",
          element: <MediationCenter />
        },
        {
          path: "/transactions",
          element: <TransactionHistory />
        },
        {
          path: "/moneys",
          element: <MoneyManage />
        },
        {
          path: "/analytics",
          element: <DataAnalysis />
        },
      ],
    },
  ];

  return useRoutes(router);
}
