import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Components/Common/Spinner";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const { pathname } = useLocation();


  if (loading) {
    return <Spinner></Spinner>
  }


  if (!user) {
    return <Navigate to={"/login"} state={pathname}></Navigate>;
  }

  

  

  return <div>{children}</div>;
};

export default PrivateRoute;
