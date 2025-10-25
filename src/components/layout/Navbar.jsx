import { useState, useRef, useEffect, use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);

export default function Navbar() {
  const aboutRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    if (selectedMenu !== menuId) {
      setSelectedMenu(menuId);
    } else {
      setSelectedMenu(null);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setSelectedMenu(null);
      }
    }
    if (selectedMenu !== "about") {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedMenu]);

  return (
    <div
      className="fixed top-7 left-1/2 transform -translate-x-1/2 w-3/4
    flex justify-between items-center gap-4 text-[18px] font-medium "
    >
      <nav
        className=" text-Ivory/40 rounded-full   
      px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 w-full h-[50px]"
      >
        {/* Logo Web */}
        <img src="/public/img/hmmm.ico" alt=" " />

        {/* Main Menu */}
        <ul className="hidden md:flex gap-6 ">
          {/* 1-Home */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("home")}
              className={`${
                selectedMenu === "home"
                  ? "text-Green4 border-b-2 border-Green4"
                  : "hover:text-Ivory "
              }`}
            >
              Home
            </a>
          </li>

          {/* 2-About */}
          <li ref={aboutRef} className="relative justify-items-end">
            <button
              type="button"
              id="about-button"
              onClick={() => handleMenuClick("about")}
              aria-haspopup="true"
              aria-expanded={selectedMenu === "about"}
              aria-controls="about-menu"
              className={`flex items-center ${
                selectedMenu === "about"
                  ? "text-[#A3FE01] border-b-2 border-[#A3FE01]"
                  : "hover:text-Ivory"
              }`}
            >
              <span className="mr-1.5"> About me </span>
              {/* DropDown about */}
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${
                  selectedMenu === "about" ? "rotate-180" : "rotate-0"
                } transition-transform duration-200`}
              />
            </button>

            {selectedMenu === "about" && (
              <div
                id="about-menu"
                role="menu"
                className="absolute mt-2 w-35 
              bg-white/20 text-Ivory/40 rounded-md shadow-lg z-10 border-1 border-white/20 "
              >
                <a href="#" className="block px-4 py-2 hover:text-Green4 hover:bg-white/5">
                  Profile me
                </a>
                <a href="#" className="block px-4 py-2 hover:text-Green4 hover:bg-white/5">
                  What I do
                </a>
              </div>
            )}
          </li>

          {/* 3-Work */}
          <li>
            <a
              href="#"
              onClick={() => handleMenuClick("work")}
              className={`${
                selectedMenu === "work"
                  ? "text-[#A3FE01] border-b-2 border-[#A3FE01]"
                  : "hover:text-Ivory"
              }`}
            >
              Work
            </a>
          </li>
        </ul>
      </nav>

      {/* 4-BTN-Contact */}
      <button
        className="bg-white/20 hover:bg-Green4/57 backdrop-blur-md text-Ivory/40 hover:text-Ivory rounded-full shadow-lg border border-white/20 hover:border-Green4/80
        px-10 py-3 flex md:flex-row gap-8 items-center justify-between transition-all duration-300 h-[50px] "
      >
        Contact
      </button>
    </div>
  );
}
