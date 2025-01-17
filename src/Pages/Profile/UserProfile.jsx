import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const UserProfile = () => {
  const {user } = useContext(AuthContext)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-5">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-24 h-24  rounded-full mb-5 " referrerPolicy="no-referrer"
        />
        <p className="text-lg">
          <span className="font-semibold">Name:</span> {user?.displayName}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Agreement Accept Date:</span> None
        </p>
        <p className="text-lg">
          <span className="font-semibold">Rented Apartment Info:</span>
        </p>
        <ul className="pl-5 list-disc">
          <li>Floor: None</li>
          <li>Block: None</li>
          <li>Room No: None</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
