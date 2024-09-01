import Link from "next/link";

const Header = () => {
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
      <div className="flex flex-col justify-between px-4 py-8 md:px-12 md:py-3 md:flex-row md:items-center">
        {/* Company Logo */}
        <div className="flex space-x-1 justify-center items-center">
          <span></span>
          <span className="flex flex-col">
            <span className="text-logo text-4xl text-center font-semibold">
              ALPHAA
            </span>
            <span className="text-logo text-sm">FINANCIAL SOLUTIONS</span>
          </span>
        </div>
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
                FAQ'S
              </Link>
            </li>
            <li>
              <button className="text-sm font-semibold bg-bg-3 px-4 py-3 text-white rounded-md">
                CALL US ANYTIME
              </button>
            </li>
          </ul>
        </div>
        {/* Mobile Navbar Links */}
        <div className="md:hidden"></div>
        {/* Hamburger */}
        <div className="cursor-pointer md:hidden">
          <span style={{fontSize: "42px"}} className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
};

export default Header;
