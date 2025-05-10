import React from "react";

function Header({ page, setPage, role }) {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <img
          src="https://placehold.co/150x50/indigo/white?text=College+MS "
          alt="University Logo"
          className="h-8 w-auto"
        />
        <nav className="space-x-4">
          {!["home", "login", "register"].includes(page) && (
            <>
              <button
                onClick={() => setPage("dashboard")}
                className="hover:text-indigo-600 transition"
              >
                Dashboard
              </button>
              <button
                onClick={() => setPage("logout")}
                className="hover:text-indigo-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
