import React from "react";
import FeatureCard from "../components/FeatureCard";

function AdminDashboard({ user }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Manage Users"
        icon="👥"
        onClick={() => alert("User Management")}
      />
      <FeatureCard
        title="Add/Edit Courses"
        icon="➕"
        onClick={() => alert("Create New Course")}
      />
      <FeatureCard
        title="Set Timetables"
        icon="🗓️"
        onClick={() => alert("Schedule Courses")}
      />
      <FeatureCard
        title="View Reports"
        icon="📊"
        onClick={() => alert("Analytics Dashboard")}
      />
      <FeatureCard
        title="System Settings"
        icon="⚙️"
        onClick={() => alert("Configuration")}
      />
      <FeatureCard
        title="Support Tickets"
        icon="💬"
        onClick={() => alert("Helpdesk")}
      />
    </div>
  );
}

export default AdminDashboard;
