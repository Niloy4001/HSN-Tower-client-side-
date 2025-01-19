import React from "react";
import DashboardContent from "../Pages/Dashboard/DashboardContent";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiArchiveDrawerFill } from "react-icons/ri";
import useRole from "../hooks/useRole";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const { role } = useRole();
  // console.log(role);

  return (
    <div className="flex min-h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <RiArchiveDrawerFill /> Open Dashboard
          </label>
          <div className="flex ml-4 justify-center ">
          <Link className="btn  " to={"/"}>
          Go to Home
          </Link>
          </div>
          <div className="w-full p-10">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
            </li>
            {role === "User" && (
              <>
                <li>
                  <NavLink to="/dashboard/userProfile" className="hover:text-gray-300">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/announcements"
                    className="hover:text-gray-300"
                  >
                    Announcements
                  </NavLink>
                </li>
              </>
            )}
            {role === "Member" && (
              <>
              <li>
                  <NavLink
                    to="/dashboard/membersProfile"
                    className="hover:text-gray-300"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/makePayment"
                    className="hover:text-gray-300"
                  >
                    Make Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className="hover:text-gray-300"
                  >
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/announcements"
                    className="hover:text-gray-300"
                  >
                    Announcements
                  </NavLink>
                </li>
              </>
            )}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className="hover:text-gray-300"
                  >
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageMembers"
                    className="hover:text-gray-300"
                  >
                    Manage Members
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/makeAnnouncement"
                    className="hover:text-gray-300"
                  >
                    Make Announcement
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/agreementRequests"
                    className="hover:text-gray-300"
                  >
                    Agreement Request
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageCoupons"
                    className="hover:text-gray-300"
                  >
                    Manage Coupons
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Main Content
      <div className="w-3/4 p-10">
        <Outlet></Outlet>
      </div> */}
    <Toaster></Toaster>
    </div>
  );
};

export default DashboardLayout;
