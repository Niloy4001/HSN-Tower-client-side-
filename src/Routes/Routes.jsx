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

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/apartment",
          element: <Apartment></Apartment>
        },
      ]
    },
    {
      path: "/login",
      element:<Login></Login>,
    },
    {
      path: "/register",
      element:<Register></Register>,
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          index:true,
          element:<DashboardContent></DashboardContent>
        },
        {
          path:'/dashboard/announcements',
          element:<Announcement></Announcement>
        },
        {
          path:'/dashboard/makePayment',
          element:<MemberPrivateRoute>
            <MakePayment></MakePayment>
          </MemberPrivateRoute>
        },
        {
          path:'/dashboard/paymentHistory',
          element:<MemberPrivateRoute><PaymentHistory></PaymentHistory></MemberPrivateRoute>
        },
      ]
    }
  ]);

  export default router;