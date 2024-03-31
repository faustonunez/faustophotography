import { NavLink } from "react-router-dom"; // Make sure you've imported NavLink
import PreventImageContext from "@/components/PreventImageContext";

export interface HorizontalCardProps {
  image: string;
  title: string;
  altText?: string;
  className?: string;
  path: string;
}

export function HorizontalCard({
  image,
  title,
  altText = "Image description",
  className = "",
  path,
}: HorizontalCardProps) {
  return (
    <NavLink to={path} className={`w-1/2 h-full ${className} relative block `}>
      <div className="contaienr" id="title-6">
        <div className="  tilt-box-wrap ">
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <span className="t_over"></span>
          <div className="tilt-box">
            <PreventImageContext>
              <img
                src={image}
                alt={altText}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </PreventImageContext>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
            <h5 className="absolute bottom-0 left-0 p-6 text-white font-playfair">
              {title}
            </h5>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
