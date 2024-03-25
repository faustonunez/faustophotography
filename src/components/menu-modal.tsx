import { NavLink } from "react-router-dom";
import CloseIcon from "../assets/icon-close.svg?react";

export function MenuModal({ onClose }) {
  const getNavLinkClass = ({ isActive }) =>
    `relative ${isActive ? " text-light-text-dark" : "text-light-text-dark hover:text-light-text-dark"} no-underline `;

  return (
    <div className="w-svw h-full bg-custom p-20  z-[1000] top-0 backdrop-blur-md fixed  ">
      <CloseIcon
        className="fixed top-10 right-10 cursor-pointer"
        onClick={onClose}
      />
      <div className="h-full flex flex-col  justify-start gap-10 items-center">
        <ul className="flex flex-col justify-center sm:gap-8 gap-6 font-playfair items-center sm:text-4xl text-3xl   ">
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              Places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/motion"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              Motion
            </NavLink>
          </li>
        </ul>
        <div className=" w-[30%] border-b-2  border-dark-divider "></div>
        <ul className="flex flex-col justify-center  sm:gap-8 gap-6 font-playfair items-center sm:text-4xl text-3xl   ">
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
              onClick={onClose} // Add this line to each NavLink
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/faustonunez/"
              className=" text-light-text-dark "
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
