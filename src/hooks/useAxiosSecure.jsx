import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Adding a request interceptor
  axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token')
      config.headers.authorization = `Bearer ${token}`
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Adding a response interceptor
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // ('error from hook', error);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
