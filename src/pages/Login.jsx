import React from "react";

function Login({ setPage, setUser, setRole }) {
  const handleLogin = (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    const name = e.target.email.value.split("@")[0];
    setUser({ name, email: e.target.email.value });
    setRole(role);
    setPage("dashboard");
  };

  return (
    <section className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin}>
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
          className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <button
          onClick={() => setPage("register")}
          className="text-indigo-600 underline"
        >
          Register
        </button>
      </p>
    </section>
  );
}

export default Login;
