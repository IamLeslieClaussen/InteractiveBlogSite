import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="logo (1).png"
          className="w-8 h-8"
          w={32}
          h={32}
          alt="Lamalog Logo"
        />
        <span>lamalog</span>
      </Link>
      {/*MOBILE MENU*/}
      <div className=" flex md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/*MOBILE LINK LIST*/}
        {open && (
          <div
            className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg  absolute top-16 right-0 bg-white z-50 transition-all`}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
      {/*DESKTOP MENU*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/loginPage">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
