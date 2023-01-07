import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg z-40 fixed shadow-md py-2 bg-gray-100 flex items-center w-full justify-between bg-gray-300">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="nav-item">
              <Link>
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Todos"
                className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className = "absolute flex text-lg text-blue-800/60 item-center justify-center w-full">
            What should you do now?
      </div>
    </nav>
  );
};

export default Header;
