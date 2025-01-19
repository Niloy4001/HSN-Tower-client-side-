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

  //   console.log(state);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: paymentInfo?.rent, discount: paymentInfo?.discount })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        // console.log(res.data.clientSecret);
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
      // console.log("[error]", error);
      toast.error(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      toast.success(
        `Your Payment successfull , Transaction Id : ${paymentMethod.id}`
      );
    }

    // confirm payment
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
      // console.log("confirm error", confirmError);
      setError(confirmError);
      toast.error(`${confirmError.message}`);
    } else {
      const history = {
        email: user?.email,
        name: user?.displayName,
        month: paymentInfo?.month,
        date: new Date(),
        amount: paymentIntent.amount / 100 ,
        transactionId: paymentIntent.id,
      };
      const { data } = axiosSecure.post("/paymentsHistory", history);
      // console.log(data);

      setSuccess(`Payment Successfull , Txid:${paymentIntent.id}`);
      // console.log("paymentIntent", paymentIntent);
    }
  };


  // handle apply coupon
  const handleApplyCoupon =async (e) =>{
    e.preventDefault()
    const value = e.target.couponCode.value 
    // console.log(value);
    try {
      const {data} = await axiosSecure.post('/findCoupon', { coupon :value})
      if (data.message === "available") {
        setCouponSuccess('Successfully coupon applied')
        // console.log(paymentInfo);
        setPaymentInfo({...paymentInfo,discount:data.discount })

        // console.log(paymentInfo);
        
        // console.log(data);
        
      }  
      if (data.message === "Invalid Coupon" || data.message === "Unavailable") {
        setCouponError(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    
    // console.log(data);
    
    
  }
  return (
    <div>
      <div className="flex items-center justify-center  ">
        <form className="bg-white p-6 rounded-lg shadow-lg w-full " onSubmit={handleApplyCoupon}>
        <label
              htmlFor="couponCode"
              className="block text-gray-700 font-medium mb-2"
            >
              Coupon Code
            </label>
          <div className="mb-4 flex justify-center flex-col md:flex-row gap-1">
            
            <input
              type="text"
              id="couponCode"
              name="couponCode"
              placeholder="Enter your coupon code"
              className=" px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[70%]"
            />
            <button
              type="submit"
              className="w-full md:w-[28%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Apply Coupon
            </button>
          </div>
          {couponError && <p className="text-red-600">{couponError}</p>}
          {CouponSuccess && <p className="text-green-600">{CouponSuccess}</p>}
        </form>
      </div>
      {/* payment input */}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border border-solid border-blue-600 p-3 rounded-md"
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
            className="btn bg-blue-500 text-white font-bold hover:bg-blue-600"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
