import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineEyeOff } from "react-icons/hi";
import { RiEyeLine } from "react-icons/ri";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { logInByGoogle, logInByEmailPassword, user, setForgotEmail } =
    useContext(AuthContext);
  const { state } = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [eye, setEye] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle Google Login
  const handleGoogleLogIn = () => {
    setErrorMessage("");
    logInByGoogle()
      .then((res) => {
        toast.success("Log In successful");
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    logInByEmailPassword(email, password)
      .then((res) => {
        e.target.reset();
        navigate(state ? `${state}` : "/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="flex justify-center items-center py-14 min-h-screen px-3">
      <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] lg:w-[60%]">
        {/* Login Form */}
        <div className="bg-white w-full md:w-[50%] p-6 shadow-2xl">
          <h1 className="text-4xl text-center font-bold mb-5 flex justify-between items-center px-6">
            <span className="text-[#1A3D7C]">Log In</span>
            <button onClick={handleGoogleLogIn} className="text-2xl text-[#F8B400]">
              <FaGoogle />
            </button>
          </h1>

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input ref={passwordRef} type={eye ? "text" : "password"} placeholder="password" className="input input-bordered" required />
              <span onClick={() => setEye(!eye)} className="absolute top-[52px] right-[8px] cursor-pointer">
                {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
              </span>
            </div>

            <div className="form-control mt-6">
              <button className="btn shadow-2xl text-white bg-gradient-to-b from-blue-500 to-blue-800">Login</button>
            </div>

            <div>
              <p className="text-left text-red-600">{errorMessage && errorMessage}</p>
            </div>
          </form>

          {/* Demo Credentials Button */}
          <button
            onClick={() => setShowDemo(true)}
            className="btn  w-full mt-4 bg-[#F8B400] text-[#1A3D7C] hover:bg-[#F8B400]"
          >
            Demo Credentials
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center text-white bg-gradient-to-b from-blue-500 to-blue-800 w-full md:w-[50%] py-7 shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to login</h1>
            <p className="mb-4">Don't have an account?</p>
            <Link to={"/register"} className="px-6 py-2 text-[#1A3D7C] bg-white rounded-md font-semibold hover:bg-pink-100">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Demo Credentials */}
      {showDemo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold mb-4 text-center">Demo Credentials</h2>

            
            <div className="mt-4">
              <h3 className="font-semibold">👤 User Credential:</h3>
              <p>Email: <span className="font-mono">user11@gmail.com</span></p>
              <p>Password: <span className="font-mono">User12345</span></p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">👤 Member Credential:</h3>
              <p>Email: <span className="font-mono">member22@gmail.com</span></p>
              <p>Password: <span className="font-mono">Member22</span></p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">👤 Admin Credential:</h3>
              <p>Email: <span className="font-mono">admin1@gmail.com</span></p>
              <p>Password: <span className="font-mono">Admin12345</span></p>
            </div>

            <button
              onClick={() => setShowDemo(false)}
              className="btn w-full mt-4 bg-red-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
