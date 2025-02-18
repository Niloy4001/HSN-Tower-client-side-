import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Common/Spinner";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MakePayment = () => {
  const { user, paymentInfo, setPaymentInfo } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data, isPending } = useQuery({
    queryKey: ["apartmentInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/apartmentInfo/${user?.email}`);
      return data;
    },
  });

  if (isPending) return <Spinner />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      rent: e.target.rent.value,
      month: e.target.month.value,
      apartmentNo: e.target.apartmentNo.value,
      blockName: e.target.blockName.value,
      floor: e.target.floor.value
    };
    
    setPaymentInfo(formData);
    navigate("/dashboard/payment");
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] flex items-center justify-center p-4 py-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8 text-center">
          Rent Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Member Email */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Member Email
            </label>
            <input
              type="email"
              name="memberEmail"
              defaultValue={data?.UserEmail}
              readOnly
              className="input bg-[#F4F6F9] text-[#6C757D]"
            />
          </div>

          {/* Floor */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Floor
            </label>
            <input
              type="text"
              name="floor"
              defaultValue={data?.floorNo}
              readOnly
              className="input bg-[#F4F6F9] text-[#6C757D]"
            />
          </div>

          {/* Block Name */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Block Name
            </label>
            <input
              type="text"
              name="blockName"
              defaultValue={data?.blockName}
              readOnly
              className="input bg-[#F4F6F9] text-[#6C757D]"
            />
          </div>

          {/* Apartment Number */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Apartment No
            </label>
            <input
              type="text"
              name="apartmentNo"
              defaultValue={data?.apartmentNo}
              readOnly
              className="input bg-[#F4F6F9] text-[#6C757D]"
            />
          </div>

          {/* Rent Amount */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Rent Amount
            </label>
            <input
              type="text"
              name="rent"
              defaultValue={data?.rent}
              readOnly
              className="input bg-[#F4F6F9] text-[#6C757D]"
            />
          </div>

          {/* Month Selection */}
          <div className="form-control">
            <label className="label text-[#2C3E50] font-semibold">
              Select Month
            </label>
            <select
              name="month"
              className="select w-full border-[#E2E8F0] focus:ring-2 focus:ring-[#1A3D7C]"
            >
              {[
                "January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"
              ].map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#1A3D7C] text-white hover:bg-[#0A1E3D] transition-all"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;