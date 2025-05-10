import React from "react";

function CourseCard({ course }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-24 h-24 mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
          <p>{course.schedule}</p>
          <p>Current enrollment: {course.enrollment}</p>
          <div
            className="progress-bar"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
