import React from "react";

function Register({ setPage }) {
  const handleRegister = (e) => {
    e.preventDefault();
    setPage("login");
  };

  return (
    <section className="max-w-md mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <select name="role" required className="w-full p-3 mb-4 border rounded">
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <button
          onClick={() => setPage("login")}
          className="text-indigo-600 underline"
        >
          Login
        </button>
      </p>
    </section>
  );
}

export default Register;
