import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { AuthContext } from "../../../Context/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../../Components/Common/Spinner";
import moment from "moment";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Fetching data for overview stats
  const { isPending, data: stats } = useQuery({
    queryKey: ["overviewStats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/overviewStats`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }
  // console.log(stats);
  

  const rent = [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ]
  const monthMap = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };
  // Loop through data and update rent array

  stats?.paymentsData.forEach(({ month, amount }) => {
    const monthShort = monthMap[month];
    if (monthShort) {
      const rentItem = rent.find((r) => r.month === monthShort);
      if (rentItem) {
        rentItem.amount += amount;
      }
    }
  });
  // console.log(rent);
  
  

  // Bar chart data for rent collection
  const rentData = rent || [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
  ];

//   // Pie chart data for available vs occupied apartments
  const apartmentData = [
    { name: "Available", value: stats?.available || 0 },
    { name: "Occupied", value: stats?.unavailable || 0 },
  ];
  const COLORS = ["#28A745", "#DC3545"]; // Green & Red

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <StatCard title="Total Apartments" value={stats?.totalApartments} color="bg-blue-600" />
        <StatCard title="Total Users" value={stats?.totalUsers} color="bg-green-600" />
        <StatCard title="Total Members" value={stats?.totalMembers} color="bg-yellow-600" />
        <StatCard title="Total Payments" value={stats?.totalPayments} color="bg-purple-600" />
        <StatCard title="Pending Requests" value={stats?.pendingRequests} color="bg-red-600" />
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart - Rent Collection */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Rent Collection</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rentData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#1A3D7C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Apartment Status */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Apartment Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={apartmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {apartmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">User Name</th>
                <th className="p-3 text-left">Amount</th>
                {/* <th className="p-3 text-left">Status</th> */}
              </tr>
            </thead>
            <tbody>
              {stats?.paymentsData?.map((payment, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{moment(payment.date).format("MMM Do YY")}</td>
                  <td className="p-3">{payment.name}</td>
                  <td className="p-3">${payment.amount}</td>
                  {/* <td className={`p-3 font-semibold ${payment.status === "Completed" ? "text-green-600" : "text-red-600"}`}>
                    {payment.status}
                  </td> */}
                </tr>
              )) || <tr><td className="p-3 text-gray-500" colSpan="4">No transactions found</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, color }) => (
  <div className={`p-6 rounded-lg shadow-md text-white ${color}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default Overview;
