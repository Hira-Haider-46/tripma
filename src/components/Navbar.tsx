import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import SignUp from "./SignUp";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-white w-full">
        <div className="cursor-pointer duration-300 hover:scale-102">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-28 h-auto" />
          </NavLink>
        </div>

        <ul className="hidden md:flex space-x-8 mr-4">
          <li className="mt-2.5">
            <NavLink
              to="/"
              className="text-base font-normal text-gray-500 duration-300 hover:text-indigo-500 hover:font-bold"
            >
              Flights
            </NavLink>
          </li>
          <li className="mt-2.5">
            <NavLink
              to="/"
              className="text-base font-normal text-gray-500 duration-300 hover:text-indigo-500 hover:font-bold"
            >
              Hotels
            </NavLink>
          </li>
          <li className="mt-2.5">
            <NavLink
              to="/"
              className="text-base font-normal text-gray-500 duration-300 hover:text-indigo-500 hover:font-bold"
            >
              Packages
            </NavLink>
          </li>
          <li className="mt-2.5">
            <NavLink
              to="/"
              className="text-base font-normal text-gray-500 duration-300 hover:text-indigo-500 hover:font-bold"
            >
              Sign in
            </NavLink>
          </li>
          <li
            className="bg-indigo-500 px-6 py-3 rounded-md cursor-pointer duration-300 hover:scale-101"
            onClick={() => setSignIn(true)}
          >
            <NavLink to="/" className="text-base font-medium text-white">
              Sign up
            </NavLink>
          </li>
        </ul>
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div
          className={`absolute z-2 top-16 left-0 w-full bg-white md:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-6 py-4 text-center">
            <li>
              <NavLink
                to="/"
                className="block text-gray-500 text-lg hover:text-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block text-gray-500 text-lg hover:text-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block text-gray-500 text-lg hover:text-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block text-gray-500 text-lg hover:text-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </NavLink>
            </li>
            <li
              className="bg-indigo-500 px-6 py-3 rounded-md cursor-pointer duration-300 hover:scale-101 text-center w-1/3 mx-auto"
              onClick={() => setSignIn(true)}
            >
              <NavLink to="/" className="text-base font-medium text-white">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {signIn && <SignUp signIn={signIn} setSignIn={setSignIn} />}
    </>
  );
};

export default Navbar;