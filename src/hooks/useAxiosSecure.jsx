import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000"
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(localStorage.getItem('access-token'));
  
  // Adding a request interceptor
  useEffect(()=>{
    // console.log(localStorage.getItem('access-token'));
    axiosSecure.interceptors.request.use(
      function (config) {
        console.log('request sent')
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        console.log('request does not sent');
        
        return Promise.reject('error from secure post request',error);
      }
    );
  })

  // Adding a response interceptor
  useEffect(() => {
    // console.log(localStorage.getItem('access-token'));
    axiosSecure.interceptors.response.use(
      (res) => {
        console.log('response come in');
        
        return res;
      },
      (error) => {
        console.log('response can not come in');
        
        // ('error from hook', error);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          navigate("/login");
        }
        console.log('erore from response request', error);
        
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
