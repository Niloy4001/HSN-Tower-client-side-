import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink className="font-medium mx-4" to={"/"}>Home</NavLink>
      <NavLink className="font-medium mx-4" to={"/apartment"}>Apartment</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar w-[90%] mx-auto">
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
          <Link to={"/"} className="btn btn-ghost text-xl flex items-center"><img src={logo} alt=""  className="w-[60px] h-[60px]"/><span>HSN Tower</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow space-y-2"
                >
                  <li className="text-center font-bold">{user && user.displayName}</li>
                  <li>
                    <Link to={"/dashboard"} className="btn btn-sm">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button className="btn btn-sm" onClick={() => logOut()}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btn">
                Log In
              </Link>
              <Link to={"/register"} className="btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
