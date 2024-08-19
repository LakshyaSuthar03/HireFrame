import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosBriefcase } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-8 w-svh flex px-10 py-4 justify-between">
      <div>
        <Link to="/">
          <div className="flex items-center gap-1">
            <IoIosBriefcase />
            HIREFRAME
          </div>
        </Link>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-2">
          <li className="bg-[var(--secondary)] px-3 py-1 rounded-2xl cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="px-3 py-1 rounded-2xl text-[var(--textLight)] cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 py-1 rounded-2xl text-[var(--textLight)] cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center my-auto cursor-pointer relative">
        <img
          src="https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg"
          alt=""
          className="h-8 w-8 rounded-full"
        />
        <RiArrowDropDownLine />
        <div className="ml-3 md:hidden" onClick={toggleDropdown}>
          {isDropdownOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-2 z-10">
            <li className="bg-[var(--secondary)] px-3 py-1 rounded-2xl cursor-pointer">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="px-3 py-1 rounded-2xl text-[var(--textLight)] cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="px-3 py-1 rounded-2xl text-[var(--textLight)] cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
