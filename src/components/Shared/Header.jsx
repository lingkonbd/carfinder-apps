import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link className="text-[#010C3A]" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-[#010C3A]" to="/shops">
          Shops
        </Link>
      </li>
      <li>
        <Link className="text-[#010C3A]" to="/others-projects">
          Other Projects
        </Link>
      </li>
      <li>
        <Link className="text-[#010C3A]" to="/blogs">
          Blogs
        </Link>
      </li>
      {user && (
        <li>
          <Link className="text-[#010C3A]" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <div className="">
          <button
            className="hover:bg-[#df0303] px-[1rem] py-[.75rem] hover:text-[#fff] px-4  ml-2 rounded-sm text-white text-[#010C3A] flex items-center justify-between"
            onClick={handleLogOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <li>
            <Link className="text-[#010C3A]" to="/signin">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-[#010C3A]" to="/signup">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="header-area bg-[#F3F3FE] py-3">
      <div className="container">
        <div className="navbar justify-between bg-[#F3F3FE]">
          <div className="navbar-start max-w-fit">
            {/* <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div> */}
            <Link
              to="/"
              className="text-[#010C3A] font-bold uppercase text-2xl"
            >
              Car <span className="text-[#df0303]">Finder</span>
            </Link>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="right-0 z-[999] menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="navbar-center hidden md:flex items-center justify-between">
            <ul className="menu menu-horizontal items-center p-0">
              {menuItems}
            </ul>
          </div>
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
