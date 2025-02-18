import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiArchiveDrawerFill } from "react-icons/ri";
import useRole from "../hooks/useRole";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const { role } = useRole();

  return (
    <div className="flex min-h-screen bg-[#F4F6F9]">
      {/* Drawer for Sidebar */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Mobile Toggle Button */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-[#1A3D7C] text-white drawer-button lg:hidden mt-4 ml-4"
          >
            <RiArchiveDrawerFill className="mr-2" /> Open Dashboard
          </label>

          {/* Home Button */}
          <div className="flex justify-end p-4">
            <Link
              to="/"
              className="btn bg-[#1A3D7C] text-white hover:bg-[#0A1E3D]"
            >
              Go to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="w-full p-6">
            <Outlet />
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#1A3D7C] text-white min-h-full w-80 p-4">
            {/* Sidebar Heading */}
            <li>
              <h2 className="text-2xl font-bold mb-8 text-center text-[#F8B400]">
                Dashboard
              </h2>
            </li>

            {/* User Links */}
            {role === "User" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userProfile"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/announcements"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Announcements
                  </NavLink>
                </li>
              </>
            )}

            {/* Member Links */}
            {role === "Member" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/membersProfile"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/makePayment"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Make Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/announcements"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Announcements
                  </NavLink>
                </li>
              </>
            )}

            {/* Admin Links */}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageMembers"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Manage Members
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/makeAnnouncement"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Make Announcement
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/agreementRequests"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Agreement Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageCoupons"
                    className="hover:bg-[#0A1E3D] rounded-lg"
                  >
                    Manage Coupons
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

export default DashboardLayout;