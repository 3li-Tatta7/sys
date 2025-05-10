import React from "react";
import FeatureCard from "../components/FeatureCard";

function InstructorDashboard({ user }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        title="Upload Grades"
        icon="🖋️"
        onClick={() => alert("Enter Grades")}
      />
      <FeatureCard
        title="View Attendance"
        icon="📅"
        onClick={() => alert("Check Attendance")}
      />
      <FeatureCard
        title="Upload Materials"
        icon="📁"
        onClick={() => alert("Share Files")}
      />
      <FeatureCard
        title="Send Announcements"
        icon="📢"
        onClick={() => alert("Post Announcement")}
      />
      <FeatureCard
        title="Manage Courses"
        icon="📘"
        onClick={() => alert("Edit Course Details")}
      />
      <FeatureCard
        title="Reports"
        icon="📈"
        onClick={() => alert("Generate Report")}
      />
    </div>
  );
}

export default InstructorDashboard;
