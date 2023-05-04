import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import profileImage2 from "../assets/images/profileImage2.png";
import cross from "../assets/images/cross.png";

export const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-md"
                  alt="profile image"
                  src={profileImage2}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <nav>
                    <NavLink
                      to=""
                      className="hover:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                      aria-label="home link main"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="profiles"
                      className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-label="profiles link main"
                    >
                      Profiles
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <img
                    className="h-6 w-6 rounded-md"
                    alt="close cross"
                    src={cross}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <nav>
                <NavLink
                  to=""
                  className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                  aria-label="home link mobile"
                >
                  Home
                </NavLink>

                <NavLink
                  to="profiles"
                  className="text-gray-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-label="profiles link mobile"
                >
                  Profiles
                </NavLink>
              </nav>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};
