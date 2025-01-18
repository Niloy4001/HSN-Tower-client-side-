import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto space-y-20">
      <h1 className="text-4xl lg:text-5xl font-bold  text-gray-900 leading-tight text-center mb-6">
        Make Payment
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
