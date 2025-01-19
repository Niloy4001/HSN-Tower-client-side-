import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Common/Spinner";
import toast from "react-hot-toast";

const ManageCoupon = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    isError,
    data: coupons,
    error,
    refetch,
  } = useQuery({
    queryKey: ["coupon", "public"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/coupons`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner></Spinner>;
  }

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const couponCode = e.target.couponCode.value;
    const discountPercentage = e.target.discountPercentage.value;
    const couponDescription = e.target.couponDescription.value;

    const couponInfo = { couponCode, discountPercentage, couponDescription };
    console.log(couponInfo);

    const { data } = await axiosSecure.post(`/coupons`, couponInfo);
    if (data.insertedId) {
      toast.success("Coupon Saved !!!");
      refetch();
    }

    document.getElementById("my_modal_5").close();
  };

  const handleAvailability =async (id) =>{
    const {data } =await axiosSecure.patch(`/changeAvailability/${id}`)
    if (data?.modifiedCount === 1) {
      toast.success('Availability Changed')
      refetch()
    }
    // console.log(id);
    
  }

  return (
    <div>
      ManageCoupon
      {coupons.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Discount</th>
                  <th>Code</th>
                  <th>Availablity</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {coupons.map((coupon) => (
                  <tr key={coupon._id}>
                    <th>{coupon?.discountPercentage} % OFF</th>
                    <td>{coupon?.couponCode}</td>
                    {/* <td>
                      {coupon?.availability ? (
                        <span className="badge badge-ghost text-green-600 absolute top-[8px] right-[6px]">
                          Available
                        </span>
                      ) : (
                        <span className="badge badge-ghost text-red-500 absolute top-[8px] right-[6px]">
                          Unavailable
                        </span>
                      )}
                    </td> */}
                    <td>{coupon?.availability ? <p className="text-green-600">Available</p> : <p className="text-red-500">Unavailable</p>}</td>
                    <td>{coupon?.couponDescription}</td>
                    <td><button className="btn btn-xs" onClick={()=>handleAvailability(coupon._id)}>Change Availability</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {coupons.length < 1 && <p>No Coupons</p>}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add
        </button>
      </div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give coupon Info</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* Coupon code*/}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Coupon Code
              </label>
              <input
                required
                type="text"
                name="couponCode"
                className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
                placeholder="Coupon Code"
              />
            </div>

            {/* Discount Percentage */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Discount Percentage
              </label>
              <input
                required
                type="number"
                name="discountPercentage"
                className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
                placeholder="Discount Percentage"
              />
            </div>

            {/* Coupon Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Coupon Description
              </label>
              <input
                required
                type="text"
                name="couponDescription"
                className="w-full p-3 border rounded-md bg-gray-100 text-gray-500"
                placeholder="Coupon Description"
              />
            </div>

            {/* add button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
              >
                Add
              </button>
              {/* </Link> */}
            </div>
          </form>
          {/* <div className="modal-action w-full">
      <form method="dialog ">
        if there is a button in form, it will close the modal
        <button className="btn w-full">Cancel</button>
      </form>
    </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default ManageCoupon;
