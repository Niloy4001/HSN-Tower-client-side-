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

  // console.log(histories);
  
  

  if (isPending) {
    return <Spinner></Spinner>;
  }
  
  return (
    <div><h2 className="text-2xl font-bold mb-6">Your Payment History</h2>

      {
        histories.length > 0 && <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Rent of Month</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              histories.map(history=><tr key={history._id}>
                <th>{history.name}</th>
                <td>{history.email}</td>
                <td>{history.transactionId}</td>
                <td>{history.amount}</td>
                <td>{history.date}</td>
                <td>{history.month}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
      }
      {
        histories.length<1 && <p>No payment history</p>
      }

    </div>
  )
}

export default PaymentHistory