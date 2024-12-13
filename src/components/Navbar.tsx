import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { resetUserState } from "@/atom/currentUser";

const Navbar = () => {
  const [isMenuOpen, setISMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user !== null && user !== undefined);
  }, []);

  const handleLogout = () => {
    resetUserState(); // Clear Recoil state
    localStorage.removeItem("userProducts");
    setIsLoggedIn(false); // Update local state to reflect logout
  };
  return (
    <>
      <div className="hidden sm:block w-full">
        <nav className="flex justify-between text-xl font-semibold">
          <ul className="flex flex-row pl-14 items-center pt-4 gap-8 h-fit">
            <Link to={""} className="navLink-hover">
              Home
            </Link>
            <Link to={""} className="navLink-hover">
              Shop
            </Link>
            <Link to={""} className="navLink-hover">
              Blog
            </Link>
            <Link to={""} className="navLink-hover">
              Contact us
            </Link>
            <Link to={"/Cart"} className="navLink-hover">
              Cart
            </Link>
            <div className="space-x-4">
              {isLoggedIn ? (
                <Button onClick={() => handleLogout()}>Logout</Button>
              ) : (
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </ul>
          <div className="p-4 flex justify-center items-center space-x-2 h-fit">
            <Link to={"/profile"}>Profile</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </nav>
      </div>

      {/* //mobile menu */}

      <div className="sm:hidden w-full h-dvh">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 cursor-pointer m-2"
          onClick={() => {
            setISMenuOpen(!isMenuOpen);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {isMenuOpen && (
          <div className="bg-white opacity-80 h-ful rounded-lg w-full">
            <ul className="flex flex-col items-center font-semibold pt-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact us</li>
              <div>
                {isLoggedIn ? (
                  <Button onClick={() => handleLogout()}>Logout</Button>
                ) : (
                  <Link to={"/login"}>
                    <Button>Login</Button>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
