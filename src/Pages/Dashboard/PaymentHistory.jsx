import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/Common/Spinner';
import moment from 'moment';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    data: histories,
    error,
  } = useQuery({
    queryKey: ["paymentsHistory", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/paymentsHistory/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span className="text-red-500">Error: {error.message}</span>;
  }

  return (
    <div className="bg-[#F4F6F9] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8">Your Payment History</h2>

      {histories.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="table w-full">
            <thead className="bg-[#1A3D7C] text-white">
              <tr>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Transaction ID</th>
                <th className="py-4 px-6 text-left">Amount</th>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Month</th>
              </tr>
            </thead>
            <tbody>
              {histories.map(history => (
                <tr key={history._id} className="border-b border-[#E2E8F0]">
                  <td className="py-4 px-6 text-[#2C3E50]">{history.name}</td>
                  <td className="py-4 px-6 text-[#2C3E50]">{history.email}</td>
                  <td className="py-4 px-6 text-[#6C757D]">{history.transactionId}</td>
                  <td className="py-4 px-6 text-[#28A745] font-semibold">৳{history.amount}</td>
                  <td className="py-4 px-6 text-[#6C757D]">
                    {moment(history.date).format('LLL')}
                  </td>
                  <td className="py-4 px-6 text-[#2C3E50]">{history.month}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-[#6C757D] text-lg text-center">No payment history found</p>
      )}
    </div>
  );
};

export default PaymentHistory;