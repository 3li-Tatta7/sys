import React from "react";

function Profile({ setPage, user }) {
  return (
    <div className="bg-green-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="bg-white p-6 rounded shadow">
        <img
          src="https://placehold.co/100x100/indigo/white?text=User "
          alt="User Avatar"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">{user?.name}</h3>
        <p>{user?.email}</p>
        <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
