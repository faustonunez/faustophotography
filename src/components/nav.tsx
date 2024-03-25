import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/fausto-logo.svg?react";
import Envelope from "../assets/icon-envelope.svg?react";
import BurgerMenu from "../assets/icon-burger.svg?react";
import ProfileImg from "../assets/profile.png";

import Lottie from "react-lottie-player";
import ToggleAnimation from "../assets/shutter-6.json";
import gsap from "gsap";

// Assuming the interface definitions remain the same

interface NavProps {
  onBurgerMenuClick: () => void;
}

export function Nav({ onBurgerMenuClick }: NavProps) {
  const comp = useRef(null);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(-1);
  const [navClass, setNavClass] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      // Update navigation class based on scroll position
      if (yPos > 50) {
        // Adjust the threshold as needed
        setNavClass(
          "bg-light-background/100 dark:bg-dark-background/100 grain-effect"
        );
      } else {
        setNavClass("bg-transparent");
      }

      setShouldShowNav(isScrollingUp);
      setLastYPos(yPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastYPos]);

  useEffect(() => {
    // Animate navigation bar visibility...
  }, [shouldShowNav]);

  const toggleAnimation = () => {
    // Toggle the play state
    setIsPlaying(!isPlaying);

    // Toggle the direction of the animation
    // If the animation is currently playing forward, set it to play backward, and vice versa
    setDirection(direction === 1 ? -1 : 1);

    // Toggle your theme or any other side effect here
    document.documentElement.classList.toggle("dark");
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-6"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3", "#title-4", "#title-6"], {
        opacity: 1,
        y: "0",
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowNav(isScrollingUp);
      setLastYPos(yPos);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  useEffect(() => {
    // Animate navigation bar visibility
    gsap.to(comp.current, {
      y: shouldShowNav ? 0 : -100, // Adjust based on your nav bar's size
      ease: "power1.inOut",
    });
  }, [shouldShowNav]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative ${isActive ? "text-light-text-dark dark:text-dark-text-dark" : "text-light-text-dark dark:text-dark-text-dark hover:text-light-text-dark dark:hover:text-dark-text-dark"} no-underline text-[16px] xsm:text-[18px] xl:text-[18px] 2xl:text-[18px] dark:font-light`;

  return (
    <div
      className={`w-full flex justify-between p-[16px] xsm:p-[32px] sticky top-0 z-[500] ${navClass}`}
      ref={comp}
    >
      <NavLink to="/">
        <Logo id="title-1" />
      </NavLink>

      <div className="flex justify-center" id="title-1">
        <ul className="md:flex justify-between gap-[20px] 2xl:gap-[24px] xsm font-roboto items-center hidden">
          <li id="title-1">
            <NavLink
              to="/people"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
            >
              People
            </NavLink>
          </li>
          <li id="title-1">
            <NavLink
              to="/places"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
            >
              Places
            </NavLink>
          </li>
          <li id="title-1">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
            >
              Events
            </NavLink>
          </li>
          <li id="title-1">
            <NavLink
              to="/motion"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
              }
            >
              Motion
            </NavLink>
          </li>
        </ul>

        <div className="flex justify-between ml-10 gap-4 items-center">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
          >
            <img
              className="w-[40px] h-[40px] md:block hidden"
              src={ProfileImg}
              alt="About Me"
            />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
          >
            <Envelope className="md:block hidden" />
          </NavLink>
          <Lottie
            onClick={toggleAnimation}
            className="cursor-pointer"
            loop={false}
            animationData={ToggleAnimation}
            play={isPlaying}
            direction={direction}
            // When the animation finishes, stop it to reset its state for the next play
            onComplete={() => setIsPlaying(false)}
          />
          <div
            onClick={onBurgerMenuClick}
            className="cursor-pointer md:hidden block"
          >
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
