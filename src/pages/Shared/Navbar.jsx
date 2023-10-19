import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {user && (
        <div className="flex flex-col lg:flex-row">
          <li>
            <NavLink to="/addProducts">Add Product</NavLink>
          </li>
        </div>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      <div className="navbar bg-base-100 lg:px-20 md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="font-bold text-xl md:text-4xl">P o S e</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <NavLink to="/">
                <label tabIndex={0} className="btn btn-ghost btn-circle ">
                  <div className="indicator">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* <span className="badge badge-sm indicator-item">8</span> optional */ }
                  </div>
                </label>
              </NavLink>
              <p className="text-md font-bold pl-3">{user.displayName}</p>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mx-3"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <button className="btn" onClick={handleSignOut}>
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
