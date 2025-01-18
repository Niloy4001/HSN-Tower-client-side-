import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const CheckoutForm = () => {
    
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user,paymentInfo} = useContext(AuthContext)
  const [clientSecret, setClientSecret] = useState("");
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

//   console.log(state);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: paymentInfo?.rent }).then((res) => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret);
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
      console.log("[error]", error);
      toast.error(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      toast.success(`Your Payment successfull , Transaction Id : ${paymentMethod.id}`)
    }

    // confirm payment
    const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email: user?.email,
                name:user?.displayName
            }
        }
    })

    if (confirmError) {
        console.log('confirm error', confirmError);
        setError(confirmError)
        toast.error(`${confirmError.message}`)
    }
    else{
        
        const history ={
            email: user?.email,
            name: user?.displayName,
            month: paymentInfo?.month,
            date: new Date(),
            transactionId: paymentIntent.id,
        }
        const {data} = axiosSecure.post('/paymentsHistory',history)
        console.log(data);
        
        setSuccess(`Payment Successfull , Txid:${paymentIntent.id}`)
        console.log('paymentIntent', paymentIntent);
        
    }
  };
  return (
    <div>
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
          className="btn btn-primary"
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
