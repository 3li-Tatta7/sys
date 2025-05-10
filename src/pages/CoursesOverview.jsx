import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import { mockData } from "../utils/mockData";

function CoursesOverview({ setPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = mockData.courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-green-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Courses Overview</h2>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search for courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-64"
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesOverview;
