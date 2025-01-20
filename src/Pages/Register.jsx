import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";
import { HiOutlineEyeOff } from "react-icons/hi";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { logInByGoogle, signInByEmailPassword, user, manageProfile, logOut } =
    useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef();
  const photoUrlRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  const notify = () => {
    Swal.fire({
      title: "Password,",
      html: `<ul class="list-disc  space-y-2 text-gray-800 ml-8">
                <li class="text-left text-red-600">
                    Must have an Uppercase letter 
                </li>
                <li class="text-left text-red-600">
                    Must have a Lowercase letter
                </li>
                <li class="text-left text-red-600">
                    Length must be at least 6 characters
                </li>
                </ul>`,
      confirmButtonColor: "red",
      icon: "error",
    });
  };
  const notifyForSuccessfull = () => {
    Swal.fire({
      title: "Registration Successful",
      confirmButtonColor: "green",
      icon: "success",
    });
  };

  // handle google sign in
  const handleGoogleLogIn =async() => {
    setErrorMessage("");
   await logInByGoogle()
   navigate("/");
   notifyForSuccessfull()
    //   .then((res) => {
    // //     const userInfo = {name:user?.displayName ,email: user?.email, role: "User" }
    // //  axiosPublic.post("/user", userInfo);
    //   })
      .catch((err) => setErrorMessage(err.message));
  };
  
  // const userInfo = ;
  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorMessage("");
    const name = nameRef.current.value;
    const photo = photoUrlRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!passwordRegex.test(password)) {
      return notify();
    }

    try {
      await signInByEmailPassword(email, password)
      await manageProfile(name, photo)
      // const userInfo = {name:user?.displayName ,email: user?.email, role: "User" }
      // await  axiosPublic.post("/user", userInfo);
      navigate("/");
      notifyForSuccessfull();
      e.target.reset();
    } catch (error) {
      setErrorMessage(error.message)
    }

    // signInByEmailPassword(email, password)
    //   .then((res) => {
    //     navigate("/");
    //     e.target.reset();
    //     manageProfile(name, photo)
    //       .then((response) => "good")
    //       .catch((err) => setErrorMessage(err.message));
    //   })
    //   .catch((err) => setErrorMessage(err.message));
  };
  return (
    <div>
      <Helmet>
        <title>Sign Up </title>
      </Helmet>
      <div className="flex justify-center items-center py-14 min-h-screen px-3">
        <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%]  lg:w-[60%] ">
          {/* form div */}
          <div className="bg-white w-full md:w-[50%] p-4 shrink-0 shadow-2xl">
            {/* title */}
            <h1 className="text-4xl text-center font-bold mb-5 flex justify-between items-center px-6">
              <span>Register</span>
              <button
                onClick={handleGoogleLogIn}
                className="text-2xl text-[#0B0223]"
              >
                <FaGoogle></FaGoogle>
              </button>
            </h1>
            {/* google log in */}
           
            {/* form  */}
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  ref={photoUrlRef}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={passwordRef}
                  type={eye ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setEye(!eye)}
                  className="absolute top-[52px] right-[8px] cursor-pointer"
                >
                  {eye ? <HiOutlineEyeOff /> : <RiEyeLine />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn shadow-2xl text-white bg-gradient-to-b from-blue-500 to-blue-800">
                  Register
                </button>
              </div>
              <div>
                <p className="text-left text-red-600">
                  {errorMessage && errorMessage}{" "}
                </p>
              </div>
            </form>
          </div>
          {/* right info div */}
          <div className="flex items-center justify-center text-white bg-gradient-to-b from-blue-500 to-blue-800 w-full md:w-[50%] py-7 shadow-2xl">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome to Register</h1>
              <p className="mb-4">Already Have an Account?</p>
              <Link
                to={"/login"}
                className="px-6 py-2 text-pink-500 bg-white rounded-md font-semibold hover:bg-pink-100"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
