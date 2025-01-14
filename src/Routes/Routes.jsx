import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";

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
  ]);

  export default router;