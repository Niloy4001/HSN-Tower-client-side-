import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };
  const links = (
    <>
      <NavLink className="font-medium mx-4 nav-link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="font-medium mx-4 nav-link" to={"/apartment"}>
        Apartment
      </NavLink>
      <NavLink className="font-medium mx-4 nav-link" to={"/contact"}>
        Contact
      </NavLink>
      <NavLink className="font-medium mx-4 nav-link" to={"/dashboard"}>
        Dashboard
      </NavLink>
      <NavLink className="font-medium mx-4 nav-link" to={"/profile"}>
        Profile
      </NavLink>
    </>
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="bg-[#1A3D7C] text-white sticky top-0 z-10">
      <Link
        to={"/"}
        className="btn btn-ghost text-xl items-center md:hidden flex"
      >
        <img src={logo} alt="" className="w-[60px] h-[60px]" />
        <span>
          <span>
            H<span className="text-[#F8B400]">S</span>N To
            <span className="text-[#F8B400]">w</span>er
          </span>
        </span>
      </Link>
      <div className="navbar px-0 w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl items-center md:flex hidden">
            <img src={logo} alt="" className="w-[60px] h-[60px]" />
            <span>
              H<span className="text-[#F8B400]">S</span>N To
              <span className="text-[#F8B400]">w</span>er
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="">
            {user ? (
              <>
                {/* profile icon */}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-[#1A3D7C] rounded-box z-[10] mt-3 w-52 p-2 shadow space-y-2"
                  >
                    <li className="text-center font-bold">
                      {user && user.displayName}
                    </li>
                    <li>
                      <Link
                        to={"/dashboard"}
                        className="btn bg-[#F8B400] border-none text-[#1A3D7C] btn-sm"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm bg-[#F8B400] text-[#1A3D7C] border-none"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to={"/login"} className="mr-8 font-medium">
                  Login
                </Link>
                <Link to={"/register"} className=" font-medium">
                  Register
                </Link>
              </>
            )}
          </div>
          {/* theme controller */}
          {/* <div className="ml-6">
            <label className="swap swap-rotate ">
              
              <input
                type="checkbox"
                onChange={handleToggle}
              
                checked={theme === "light" ? false : true}
              />

              
              <svg
                className="swap-off h-8 w-8 fill-current flex justify-center items-center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              
              <svg
                className="swap-on h-8 w-8 fill-current flex justify-center items-center"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
