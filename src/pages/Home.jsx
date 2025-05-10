import React from "react";

function Home({ setPage }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-8 my-12">
      <div className="text-center md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to College Management System
        </h2>
        <p className="mb-6 text-lg">
          Streamline academic processes, manage courses, track attendance,
          submit grades, and generate reports — all in one place.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => setPage("login")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => setPage("register")}
            className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Register
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://placehold.co/600x400/indigo/white?text=College+Management+System "
          alt="CMS"
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}

export default Home;
