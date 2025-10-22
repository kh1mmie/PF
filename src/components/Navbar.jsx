import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// add imported icons to the library (optional but useful)
library.add(faPlay, faAngleDown);

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  // close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") setAboutOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 flex justify-between items-center gap-4 ">
      {/* <nav
        className="bg-white/24 backdrop-blur-md text-blue rounded-full shadow-lg border border-white/20  
    px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 w-full h-[50px]"
      > */}
        <nav
        className=" backdrop-blur-md text-blue rounded-full   
    px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 w-full h-[50px]"
      >
        {/* LOGO WEB */}
        <img src="/vite.svg" alt=" " />
        {/* MAIN MENU */}
        <ul className="hidden md:flex gap-6 ">
          {/* HOME */}
          <li>
            <a
              href="#"
              className="hover:text-gray-200 hover:border-b-2 border-purple-700"
            >
              Home
            </a>
          </li>
          {/* ABOUT */}
          <li ref={aboutRef} className="relative">
            <button
              type="button"
              id="about-button"
              onClick={() => setAboutOpen((s) => !s)}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              aria-controls="about-menu"
              className="hover:text-gray-200 hover:border-b-2 border-purple-700 flex items-center gap-2"
            >
              <span>About me</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${
                  aboutOpen ? "rotate-180" : "rotate-0"
                } transition-transform duration-200`}
              />
            </button>
            {aboutOpen && (
              <div
                id="about-menu"
                role="menu"
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40
              bg-white text-black rounded-md shadow-lg z-10 border-2 "
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Profile me
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  What I were do
                </a>
                <a
                  style={{
                    width: "40px",
                    textAlign: "center",
                    paddingInline: "4px",
                    paddingBlock: "2px",
                    hover: "bg-gray-100",
                  }}
                >
                  asdasd
                </a>
              </div>
            )}
          </li>

          {/*  */}
          <li>
            <a
              href="#"
              className="hover:text-gray-200 hover:border-b-2 border-purple-700"
            >
              Work
            </a>
          </li>
          {/*  */}
        </ul>

        {/* sakibidi DROP DROP
      <div className=" ">
        <button className="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2">
          เริ่มต้นใช้งาน
        </button>
      </div> */}
      </nav>

      <div className="bg-white/24 backdrop-blur-md text-blue rounded-full shadow-lg border border-white/20  
    px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 h-[50px]">
        <button
          href="#"
          className="hover:text-gray-200 hover:border-b-2 border-purple-700"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
