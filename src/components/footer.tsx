import { NavLink } from "react-router-dom";
export function Footer() {
  return (
    <div className="w-full h-[100px] flex justify-center  border-t-[1px] border-light-divider dark:border-dark-divider mt-20">
      <div className=" sm:w-[90%] w-[90%] flex sm:flex-row flex-col justify-center gap-4   ">
        <div className="sm:w-[50%] w-[100%]  text-sm flex justify-start items-center  text-light-text-light dark:text-dark-text-light sm:text-left text-center">
          All Rights Reserve to faustonunez.com and momentoos.co
        </div>
        <div className="sm:w-[50%] w-[100%] text-sm flex sm:justify-end justify-center items-center  ">
          <ul className="flex flex-row justify-center gap-4   ">
            <li>
              <NavLink to="/About">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <a
                href="https://www.instagram.com/faustonunez/"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
