import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div>
      <nav className="w-full border-b p-4 fixed top-0">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="text-black hover:text-gray-400">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/profile" className="text-black hover:text-gray-400">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-black hover:text-gray-400"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to="/login" className="text-black hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-black hover:text-gray-400">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
