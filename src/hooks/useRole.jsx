import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Components/Common/Spinner";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    data: role,
    error,
    refetch,
  } = useQuery({
    queryKey: ["role",user?.email || "anonymous"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/checkRole/${user?.email}`);
      return data.role;
    },
  });

//   console.log(role);

  useEffect(() => {
    refetch();
  }, [user]);

  if (isPending) {
    return <Spinner></Spinner>;
  }

  return { role };
};

export default useRole;
