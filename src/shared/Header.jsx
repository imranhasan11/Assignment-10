import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import "./Header.css";

const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isActive, setIsActive] = useState("home");
  const handleNavClick = (nav) => {
    setIsActive(`${nav}`);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast(error.message);
      });
  };
  console.log(isActive);
  return (
    <nav className="bg-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={"/logo.png"} className="w-1/12 mr-3 cover" />
        <Link to={"/"}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Eco Foods
          </span>
         </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ${
                  isActive === "home" ? "active" : "default"
                }`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </Link>
              
            </li>
            <li>
              <Link
                to={"/blog"}
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isActive === "blog" ? "active " : "default"
                }`}
                onClick={() => handleNavClick("blog")}
              >
                Blogs
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  className="btn btn-success -mt-3"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn btn-success -mt-3 ">Login</button>
                </Link>
              )}
            </li>
            <li>
              {!user && (
                <Link to={"/register"}>
                  <button className="btn btn-success -mt-3 ">Register</button>
                </Link>
              )}
            </li>
            <li>
              {user && (
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ">
                    <img src={user.photoURL} title={user.displayName} />
                  </div>
                </label>
              )}
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
  );
};

export default Header;