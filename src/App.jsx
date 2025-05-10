import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CoursesOverview from "./pages/CoursesOverview";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import { mockData } from "./utils/mockData";

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;
      case "login":
        return <Login setPage={setPage} setUser={setUser} setRole={setRole} />;
      case "register":
        return <Register setPage={setPage} />;
      case "dashboard":
        return role === "student" ? (
          <StudentDashboard setPage={setPage} user={user} />
        ) : role === "instructor" ? (
          <InstructorDashboard setPage={setPage} user={user} />
        ) : (
          <AdminDashboard setPage={setPage} user={user} />
        );
      case "courses":
        return <CoursesOverview setPage={setPage} user={user} />;
      case "notifications":
        return <Notifications setPage={setPage} user={user} />;
      case "profile":
        return <Profile setPage={setPage} user={user} />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header page={page} setPage={setPage} />
      <main className="container mx-auto p-4">{renderPage()}</main>
      <Footer />
    </div>
  );
}
