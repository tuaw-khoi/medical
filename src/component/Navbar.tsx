import DropdownArrow from "./Dropdown";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-4 space-x-7">
      <nav className="flex bg-white rounded-full border-[5px] border-gray-400">
        {/* Logo & Menu */}
        <div className="flex items-center space-x-5 p-5">
          {/* Menu Icon */}
          <button className="flex flex-col gap-y-1">
            <div className="w-6 h-[3px] bg-gray-700 rounded-full"></div>
            <div className="w-4 h-[3px] bg-gray-700 rounded-full"></div>
            <div className="w-5 h-[3px] bg-gray-700 rounded-full"></div>
          </button>

          <div className="w-[1px] h-[50%] bg-gray-400"></div>

          {/* Logo */}
          <div className=" flex">
            <img className="h-15 w" src="src\assets\logo.svg" alt="" />
            <img className=" w-35" src="src\assets\name.svg" alt="" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700 ">
            <li className="relative group flex">
              <button className="hover:text-green-600 whitespace-nowrap">
                Hospital
              </button>
              <div className="mt-2">
                <DropdownArrow />
              </div>
            </li>
            <li className="relative group flex">
              <button className="hover:text-green-600 whitespace-nowrap">
                Research
              </button>
              <div className="mt-2">
                <DropdownArrow />
              </div>
            </li>
            <li className="relative group flex">
              <button className="hover:text-green-600 whitespace-nowrap">
                News
              </button>
              <div className="mt-2">
                <DropdownArrow />
              </div>
            </li>
            <li className="relative group flex">
              <button className="hover:text-green-600 whitespace-nowrap">
                CPD
              </button>
              <div className="mt-2">
                <DropdownArrow />
              </div>
            </li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center">
          <button className="bg-green-600 px-2 text-white flex items-center space-x-2 hover:bg-green-700 h-full">
            <span className="whitespace-nowrap ">Book Appointment</span>
            <span className="ml-1">↗</span>
          </button>

          <button className="bg-blue-600 px-2  text-white  rounded-r-full flex items-center space-x-2 hover:bg-blue-700 h-full">
            <span className="whitespace-nowrap">Lab Report</span>
            <span className="ml-1">↗</span>
          </button>
        </div>
      </nav>

      <button className="bg-teal-600 text-white px-10 py-7 rounded-full flex items-center space-x-2 hover:bg-teal-700 border-[5px] border-gray-400">
        <span>Academics</span>
      </button>
    </div>
  );
};
export default Navbar;
