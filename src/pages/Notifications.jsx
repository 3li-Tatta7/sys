import React from "react";

function Notifications({ setPage }) {
  return (
    <div className="bg-green-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">New Assignment Posted</h3>
          <p>Mathematics - Due in 3 days</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Quiz Reminder</h3>
          <p>Physics Quiz tomorrow at 10 AM</p>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
