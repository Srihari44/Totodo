import React, { useContext,useRef } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";

const Navbar = () => {
  const user = useContext(UserContext);
  const menuRef = useRef(null)

  const toggle = () => {
    menuRef.current.classList.toggle("hidden");
  }
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Totodo</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggle}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          ref={menuRef}
          className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
        >
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/"
              exact
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </NavLink>
            {!user ? (
              <NavLink
                to="/signup"
                exact
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                SignUp
              </NavLink>
            ) : (
              <NavLink
                to="/profile"
                exact
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Profile
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
