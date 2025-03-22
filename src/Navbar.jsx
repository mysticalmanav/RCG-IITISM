import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update active link on route change
  useEffect(() => {
    setActiveLink(location.pathname);
    setDropdownOpen(false); // Close dropdown on navigation
  }, [location]);

  return (
    <header className="bg-[#5d0208]">
      <div className="container mx-auto p-4">
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8 relative">
            <li>
              <Link
                to="/"
                className={`hover:underline ${
                  activeLink === "/" ? "text-white font-bold" : "text-white/80"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://www.iitism.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white/80"
              >
                IIT ISM
              </a>
            </li>

            {/* People Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center hover:underline focus:outline-none ${
                  activeLink === "/faculty" || activeLink === "/staff"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
                style={{ color: "white" }}
              >
                People
                <svg
                  className="ml-1 w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548L10 12.032l4.484-4.484L16 8.516 10 14.516l-6-6z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute bg-red-800 text-black rounded-md shadow-md mt-2 z-50">
                  <Link
                    to="/faculty"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setActiveLink("/faculty");
                      setDropdownOpen(false);
                    }}
                  >
                    Faculty
                  </Link>
                  <Link
                    to="/staff"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setActiveLink("/staff");
                      setDropdownOpen(false);
                    }}
                  >
                    Staff
                  </Link>
                  <Link
                    to="/student"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setActiveLink("/student");
                      setDropdownOpen(false);
                    }}
                  >
                    Student
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/research"
                className={`hover:underline ${
                  activeLink === "/research"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                to="/facilities"
                className={`hover:underline ${
                  activeLink === "/facilities"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:underline ${
                  activeLink === "/about"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`hover:underline ${
                  activeLink === "/gallery"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:underline ${
                  activeLink === "/contact"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/activity"
                className={`hover:underline ${
                  activeLink === "/activity"
                    ? "text-white font-bold"
                    : "text-white/80"
                }`}
              >
                Activities
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
