import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;
