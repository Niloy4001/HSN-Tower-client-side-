import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user, paymentInfo ,setPaymentInfo} = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [couponError, setCouponError] = useState("");
  const [success, setSuccess] = useState("");
  const [CouponSuccess, setCouponSuccess] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: paymentInfo?.rent, discount: paymentInfo?.discount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [paymentInfo, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Your Payment successful, Transaction Id: ${paymentMethod.id}`);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      toast.error(`${confirmError.message}`);
    } else {
      const history = {
        email: user?.email,
        name: user?.displayName,
        month: paymentInfo?.month,
        date: new Date(),
        amount: paymentIntent.amount / 100,
        transactionId: paymentIntent.id,
      };
      const { data } = axiosSecure.post("/paymentsHistory", history);

      setSuccess(`Payment Successful, Txid:${paymentIntent.id}`);
    }
  };

  const handleApplyCoupon =async (e) => {
    e.preventDefault();
    const value = e.target.couponCode.value;
    try {
      const {data} = await axiosSecure.post('/findCoupon', { coupon :value});
      if (data.message === "available") {
        setCouponSuccess('Successfully coupon applied');
        setPaymentInfo({...paymentInfo,discount:data.discount});
      }  
      if (data.message === "Invalid Coupon" || data.message === "Unavailable") {
        setCouponError(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-[#F4F6F9] p-6 rounded-lg shadow-lg w-full">
      {/* Coupon Form */}
      <div className="flex items-center justify-center mb-6">
        <form className="bg-white p-6 rounded-lg shadow-md w-full" onSubmit={handleApplyCoupon}>
          <label htmlFor="couponCode" className="block text-[#2C3E50] font-medium mb-2">Coupon Code</label>
          <div className="mb-4 flex justify-center flex-col md:flex-row gap-1">
            <input
              type="text"
              id="couponCode"
              name="couponCode"
              placeholder="Enter your coupon code"
              className="px-4 py-2 border border-[#1A3D7C] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[70%]"
            />
            <button
              type="submit"
              className="w-full md:w-[28%] bg-[#1A3D7C] hover:bg-[#0F2A57] text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Apply Coupon
            </button>
          </div>
          {couponError && <p className="text-[#DC3545]">{couponError}</p>}
          {CouponSuccess && <p className="text-[#28A745]">{CouponSuccess}</p>}
        </form>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border border-solid border-[#1A3D7C] p-3 rounded-md"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-7">
          <button
            type="submit"
            className="btn bg-[#1A3D7C] text-white font-bold hover:bg-[#0F2A57]"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        {error && <p className="text-[#DC3545]">{error}</p>}
        {success && <p className="text-[#28A745]">{success}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
