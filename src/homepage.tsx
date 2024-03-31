import PeopleImg from "./assets/images/homepage/hp-image-people.webp";
import PlacesImg from "./assets/images/homepage/hp-image-places.webp";
import EventsImg from "./assets/images/homepage/hp-image-events.webp";
import MotionImg from "./assets/images/homepage/hp-image-motion.webp";
import { HorizontalCard } from "./components/cards";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Homepage() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-6"], {
        opacity: 0,
        y: "+=30",

        stagger: 0.5,
      }).to(["#title-6"], {
        opacity: 1,
        y: "0",
        delay: 0,
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <div
        className="w-full flex-col justify-center main-container-spacing "
        ref={comp}
      >
        <div id="title-6">
          <h1 className="mb-[32px] sm:my-[32] md:my-[56px] sm:w-[80%] w-[100%] text-light-text-dark dark:text-dark-text-dark ">
            <span className="text-gradient">
              Painting with light, in slivers of time,
            </span>{" "}
            within the frame of our image.
          </h1>
        </div>

        <div
          id="PhotoCategories"
          className="sm:my-[80px]  flex flex-col gap-y-[32px] sm:gap-y-20"
        >
          <div className="flex sm:flex-row flex-col  gap-[32px] sm:gap-[64px] md:gap-[120px] justify-center items-center ">
            <HorizontalCard
              image={PeopleImg}
              title="People"
              altText="People"
              className="sm:w-[40%] w-[80%] h-auto"
              path="/people" // Add the path prop here
            />
            <HorizontalCard
              image={PlacesImg}
              title="Places"
              altText="Places"
              className="sm:w-[60%] w-[100%] h-full"
              path="/places" // Add the path prop here
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-[32px] sm:gap-[64px md:gap-[120px] justify-center items-center">
            <HorizontalCard
              image={EventsImg}
              title="Events"
              altText="Events"
              className="sm:w-[60%] w-[100%] h-auto"
              path="/events" // Add the path prop here
            />
            <HorizontalCard
              image={MotionImg}
              title="Motion"
              altText="Motion"
              className="sm:w-[40%] w-[100%] h-full"
              path="/motion" // Add the path prop here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
