import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogOutButton";
import  { resetUserState } from "@/atom/currentUser";

const Navbar = () => {
  const [isMenuOpen, setISMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user !== null && user !== undefined);
  }, []);

  const handleLogout = () => {
    console.log('logout');
    resetUserState();  // Clear Recoil state
    localStorage.removeItem('userProducts')
    setIsLoggedIn(false); // Update local state to reflect logout
  };
  return (
    <>
      <div className="hidden sm:block w-full">
        <nav>
          <ul className="flex flex-row pl-14 items-center gap-8 pt-4 text-xl font-semibold h-fit">
            <Link to={''} className="navLink-hover">Home</Link>
            <Link to={''} className="navLink-hover">Shop</Link>
            <Link to={''} className="navLink-hover">Blog</Link>
            <Link to={''} className="navLink-hover">Contact us</Link>
            <Link to={"/Cart"} className="navLink-hover">Cart</Link>
            <div className="space-x-4">
              {isLoggedIn ? (
                <Button onClick={()=>handleLogout()}>Logout</Button>
              ) : (
                <Link to={"/login"}>
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </ul>
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
          <div className="bg-amber-200 h-dvh rounded-lg w-1/3">
            <ul className="flex flex-col items-center font-semibold pt-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Contact us</li>
              <div>
                <LoginButton />
                <LogoutButton />
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
