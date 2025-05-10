import React from "react";
import FeatureCard from "../components/FeatureCard";

function StudentDashboard({ user }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="View Courses"
        icon="📚"
        onClick={() => alert("View Courses")}
      />
      <FeatureCard
        title="Register for Courses"
        icon="📝"
        onClick={() => alert("Enroll")}
      />
      <FeatureCard
        title="View Grades"
        icon="📊"
        onClick={() => alert("Your Grades")}
      />
      <FeatureCard
        title="Attendance"
        icon="📅"
        onClick={() => alert("Check Attendance")}
      />
      <FeatureCard
        title="Submit Requests"
        icon="📬"
        onClick={() => alert("Submit Request")}
      />
      <FeatureCard
        title="Notifications"
        icon="🔔"
        onClick={() => alert("Announcements")}
      />
    </div>
  );
}

export default StudentDashboard;
