import React, { useEffect } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Components/Common/Spinner';
import toast from 'react-hot-toast';

const ManageMembers = () => {


    const axiosSecure = useAxiosSecure();
    const {
      isPending,
      isError,
      data: members,
      error,
      refetch,
    } = useQuery({
      queryKey: ["member"],
      queryFn: async () => {
        const { data } = await axiosSecure.get(
          `/manageMembers`
        );
        return data;
      },
    });

    if (isPending) {
        return <Spinner></Spinner>
    }
  console.log(members);

  const handleRemove = async(id,email) =>{
    try{
      const {data} =await axiosSecure.patch(`/remove/${id}?email=${email}`)
      if (data.modifiedCount) {
        toast.custom(<p className='font-bold text-orange-400'>Member removed successfull</p>)
        refetch()
      }
      
    }catch(error){
      console.log(error);
      
    }
   
  }
  

  return (
    <div>ManageMembers

{
    members.length> 0 && 
    <>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>User Name</th>
        <th>User Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {members.map(member=><tr key={member._id}>
        {/* <th>{member?.displayName}</th> */}
        <th>{member?.name}</th>
        <td>{member?.email}</td>
        <td><button className='btn btn-sm' onClick={()=>handleRemove(member?._id, member?.email)}>Remove</button></td>
      </tr>)}
    </tbody>
  </table>
</div>
    </>
}
{
    members.length < 1 && <p>No members</p>
}

    </div>
  )
}

export default ManageMembers