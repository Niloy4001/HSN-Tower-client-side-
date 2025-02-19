import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import DashboardLayout from "../Layout/DashboardLayout";

import Announcement from "../Pages/Dashboard/Announcement";
import DashboardContent from "../Pages/Dashboard/DashboardContent";
import MakePayment from "../Pages/Dashboard/MakePayment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import MemberPrivateRoute from "./MemberPrivateRoute";
import Payment from "../Pages/Payment/Payment";
import ManageMembers from "../Pages/Dashboard/Admin/ManageMembers";
import AdminPrivateRoute from "./AdminPrivateRoute";
import MakeAnnouncement from "../Pages/Dashboard/Admin/MakeAnnouncement";
import AgreementRequest from "../Pages/Dashboard/Admin/AgreementRequest";
import ManageCoupon from "../Pages/Dashboard/Admin/ManageCoupon";
import AdminProfile from "../Pages/Profile/AdminProfile";
import MemberProfile from "../Pages/Profile/MemberProfile";
import UserProfile from "../Pages/Profile/UserProfile";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact";
import Profile from "../Components/Profile";
import Overview from "../Pages/Dashboard/Admin/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <PrivateRoute><DashboardContent></DashboardContent></PrivateRoute>,
      },
      {
        path: "/dashboard/announcements",
        element: <PrivateRoute><Announcement></Announcement></PrivateRoute>,
      },
      {
        path: "/dashboard/makePayment",
        element: (
          <MemberPrivateRoute>
            <PrivateRoute><MakePayment></MakePayment></PrivateRoute>
          </MemberPrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <MemberPrivateRoute>
           <PrivateRoute> <Payment></Payment></PrivateRoute>
          </MemberPrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <MemberPrivateRoute>
            <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
          </MemberPrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageMembers",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><ManageMembers></ManageMembers></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/overview",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><Overview></Overview></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/makeAnnouncement",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><MakeAnnouncement></MakeAnnouncement></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/agreementRequests",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><AgreementRequest></AgreementRequest></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageCoupons",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><ManageCoupon></ManageCoupon></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/adminProfile",
        element: (
          <AdminPrivateRoute>
            <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/dashboard/membersProfile",
        element: (
          <MemberPrivateRoute>
            <PrivateRoute><MemberProfile></MemberProfile></PrivateRoute>
          </MemberPrivateRoute>
        ),
      },
      {
        path: "/dashboard/userProfile",
        element: (
          <UserProfile></UserProfile>
        ),
      },
    ],
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  },
]);

export default router;
