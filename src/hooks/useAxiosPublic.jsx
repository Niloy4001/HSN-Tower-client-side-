import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://hsn-tower-server.vercel.app",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
