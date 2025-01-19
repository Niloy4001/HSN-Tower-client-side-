import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/Common/Spinner';
import moment from 'moment';

const MemberProfile = () => {
 const {user } = useContext(AuthContext)
 const axiosSecure = useAxiosSecure()
  const {
    isPending,
    isError,
    data: info,
    error,
    refetch,
  } = useQuery({
    queryKey: ["memberProfile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/memeberProfile/${user?.email}`);
      return data;
    },
  });




  // console.log(info);
  

  if (isPending) {
    return <Spinner></Spinner>;
  }
   return (
     <div>
       <h1 className="text-2xl font-bold mb-5">My Profile</h1>
       <div className="bg-white shadow-md rounded-lg p-5">
         <img
           src={user?.photoURL}
           alt="User"
           className="w-24 h-24  rounded-full mb-5 " referrerPolicy="no-referrer"
         />
         <p className="text-lg">
           <span className="font-semibold">Name:</span> {user?.displayName}
         </p>
         <p className="text-lg">
           <span className="font-semibold">Email:</span> {user?.email}
         </p>
         <p className="text-lg">
           <span className="font-semibold">Agreement Accept Date:</span> {moment(info?.createdAt).format('LLL')}
         </p>
         <p className="text-lg">
           <span className="font-semibold">Rented Apartment Info:</span>
         </p>
         <ul className="pl-5 list-disc">
           <li>Floor: {info?.floorNo}</li>
           <li>Block: {info?.blockName}</li>
           <li>Room No: {info?.apartmentNo}</li>
         </ul>
       </div>
     </div>
   );
}

export default MemberProfile