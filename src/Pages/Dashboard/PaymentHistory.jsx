import React, { useContext, useEffect } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../../Components/Common/Spinner';

const PaymentHistory = () => {
  const {user} = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    isError,
    data: histories,
    error,
    refetch,
  } = useQuery({
    queryKey: ["paymentsHistory",user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/paymentsHistory/${user?.email}`
      );
      return data;
    },
  });

  console.log(histories);
  
  // useEffect(() => {
  //   refetch();
  // }, []);

  if (isPending) {
    return <Spinner></Spinner>;
  }
  
  return (
    <div>PaymentHistory</div>
  )
}

export default PaymentHistory