import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-6 py-12 bg-bg-1 md:px-12">
        <h2 className="text-bg-2 text-lg font-semibold">Quick Contact</h2>
        <div className="flex flex-col gap-12 my-4 lg:flex-row">
          <div className="flex flex-col basis-1/2 gap-6">
            <span className="text-white font-light">
              At Alphaa Financial Solutions, we believe in empowering your
              property dreams with our premium financial services.
            </span>
            <ul className="flex flex-col space-y-1">
              <li className="flex space-x-2">
                <span className="material-symbols-outlined">location_on</span>
                <span className="text-white text-sm font-semibold md:text-base">
                  Sydney, Australia
                </span>
              </li>
              <li className="flex space-x-2">
                <span className="material-symbols-outlined">call</span>
                <span className="text-white text-sm font-semibold md:text-base">
                  0468328227
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col basis-1/2 gap-4 px-6 py-4 bg-bg-3 rounded-md">
            <span className="text-white font-semibold">Opening Hours</span>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between">
                <span className="text-bg-2 text-sm font-bold">MON TO FRI</span>
                <span className="text-white text-sm font-semibold">
                  9:00AM | 5:00PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-bg-2 text-sm font-bold">SAT TO SUN</span>
                <span className="text-white text-sm font-semibold">
                  APPOINTMENTS ONLY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-bg-3"></div>
      <div className="px-6 pt-8 pb-12 bg-bg-1 md:px-12">
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-4"></div>
          <span className="text-white">
            2024 © All Rights Reserved | Developed with ❤️ by{" "}
            <span className="text-bg-2">Psyber Inc</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
