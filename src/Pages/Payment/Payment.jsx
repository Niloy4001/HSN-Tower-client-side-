import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto space-y-20 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0A1E3D] leading-tight text-center mb-6">
        Make Payment
      </h1>
      <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
