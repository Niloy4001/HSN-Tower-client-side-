import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Spinner from "../../Components/Common/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { info } from "autoprefixer";

const MakePayment = () => {
  const { user,paymentInfo,setPaymentInfo } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const { data, isPending, refetch } = useQuery({
    queryKey: ["apartmentInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/apartmentInfo/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }

const info = {};

  const handleSubmit = (e)=>{
    e.preventDefault()
    const rent = e.target.rent.value 
    const month = e.target.month.value 
    const apartmentNo = e.target.apartmentNo.value 
    const blockName = e.target.blockName.value 
    const floor = e.target.floor.value
    
    info.rent = rent
    info.month = month
    info.apartmentNo = apartmentNo
    info.blockName = blockName
    info.floor = floor
    
setPaymentInfo(info)

    // console.log(paymentInfo);
    navigate("/dashboard/payment")
     
  }
//   console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Rent Payment Form</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          {/* Member Email */}
          <div className="mb-4">
            <label
              htmlFor="member-email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Member Email
            </label>
            <input
              type="email"
              id="member-email"
              name="memberEmail"
              defaultValue={data?.UserEmail}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          {/* Floor */}
          <div className="mb-4">
            <label
              htmlFor="floor"
              className="block text-gray-700 font-semibold mb-2"
            >
              Floor
            </label>
            <input
              type="text"
              id="floor"
              name="floor"
              defaultValue={data?.floorNo}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          {/* Block Name */}
          <div className="mb-4">
            <label
              htmlFor="block-name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Block Name
            </label>
            <input
              type="text"
              id="block-name"
              name="blockName"
              defaultValue={data?.blockName}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          {/* Apartment No/Room No */}
          <div className="mb-4">
            <label
              htmlFor="apartment-no"
              className="block text-gray-700 font-semibold mb-2"
            >
              Apartment No
            </label>
            <input
              type="text"
              id="apartment-no"
              name="apartmentNo"
              defaultValue={data?.apartmentNo}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          {/* Rent */}
          <div className="mb-4">
            <label
              htmlFor="rent"
              className="block text-gray-700 font-semibold mb-2"
            >
              Rent
            </label>
            <input
              type="text"
              id="rent"
              name="rent"
              defaultValue={data?.rent}
              readOnly
              className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          {/* Month */}
          <div className="mb-4">
            <label
              htmlFor="month"
              className="block text-gray-700 font-semibold mb-2"
            >
              Month
            </label>
            <select
              id="month"
              name="month"
              className="w-full p-3 border rounded-md"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>

          {/* Submit/Pay Button */}
          <div>
            {/* <Link className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md" type="submit" to={"/dashboard/payment"} state={info}>
                Pay
              
            </Link> */}
            {/* <Link to={"/dashboard/payment"} state={info}> */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
              >
                Pay
              </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
