"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggleMenubar, setToggleMenubar] = useState(false);

  return (
    <>
      <div className="px-4 py-5 bg-bg-1 md:px-12">
        <ul className="flex justify-center flex-wrap space-x-5 lg:justify-end">
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">location_on</span>
            <span className="text-white text-sm font-light md:text-base">
              Sydney, Australia
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">call</span>
            <span className="text-white text-sm font-light md:text-base">
              0468328227
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-white text-sm font-light md:text-base">
              Mon-Fri: 9:00am - 5:00pm
            </span>
          </li>
          <li className="flex space-x-2">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-white text-sm font-light md:text-base">
              Weekends Appointments Only
            </span>
          </li>
        </ul>
      </div>
      {/* Navbar */}
      <div className="relative">
        <div className="flex flex-col justify-between px-4 py-8 md:px-10 md:py-3 md:flex-row md:items-center lg:px-24">
          <Link
            href="/"
           className="m-auto w-[224px] h-[88px] md:m-0">
            <Image 
              src="/logo.png"
              width={280}
              height={144}
              className="scale-150 md:scale-125"
            />
          </Link>
          {/* Desktop Navbar Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1 lg:space-x-5">
              <li>
                <Link
                  className="px-3 py-6 text-sm font-semibold rounded-md transition-all duration-300 hover:bg-bg-3 hover:text-white"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-6 text-sm font-semibold  rounded-md transition-all duration-300 hover:bg-bg-3 hover:text-white"
                  href="/about-us"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-6 text-sm font-semibold rounded-md transition-all duration-300 hover:bg-bg-3 hover:text-white"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-6 text-sm font-semibold rounded-md transition-all duration-300 hover:bg-bg-3 hover:text-white"
                  href="/faqs"
                >
                  FAQS
                </Link>
              </li>
              <li>
                <button className="text-sm font-semibold bg-bg-3 px-4 py-3 text-white rounded-md">
                  CALL US ANYTIME
                </button>
              </li>
            </ul>
          </div>
          {/* Hamburger */}
          <div
            onClick={() => setToggleMenubar(!toggleMenubar)}
            className="cursor-pointer md:hidden"
          >
            <span
              style={{ fontSize: "42px" }}
              className="material-symbols-outlined"
            >
              menu
            </span>
          </div>
        </div>
        {/* Mobile Navbar Links */}
        <div
          className={`absolute w-full ${
            toggleMenubar ? "h-[70vh]" : "h-0"
          }   transition-all duration-500  bg-white z-10 overflow-hidden md:hidden`}
        >
          <ul className="flex flex-col">
            <li className="border-b-2 px-4 py-6 transition-colors duration-200 hover:bg-bg-3 hover:text-white">
              <Link
                className="px-3 py-6 text-sm font-semibold rounded-md "
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="border-b-2 px-4 py-6 transition-colors duration-200 hover:bg-bg-3 hover:text-white">
              <Link
                className="px-3 py-6 text-sm font-semibold  rounded-md "
                href="/about-us"
              >
                ABOUT US
              </Link>
            </li>
            <li className="border-b-2 px-4 py-6 transition-colors duration-200 hover:bg-bg-3 hover:text-white">
              <Link
                className="px-3 py-6 text-sm font-semibold rounded-md "
                href="/services"
              >
                SERVICES
              </Link>
            </li>
            <li className="border-b-2 px-4 py-6 transition-colors duration-200 hover:bg-bg-3 hover:text-white">
              <Link
                className="px-3 py-6 text-sm font-semibold rounded-md"
                href="/faqs"
              >
                FAQS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
