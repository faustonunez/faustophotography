// import PhotoAlbum and Lightbox
import "yet-another-react-lightbox/styles.css";
import { HeaderCat } from "@/components/header-category";
import { HorizontalCard } from "@/components/cards";
import NewYorkImg from "../../assets/images/people/_people-sections/places-new-york.webp";
import DRImg from "../../assets/images/people/_people-sections/places-dominican-republic.webp";
import GuatemalImg from "../../assets/images/people/_people-sections/places-guatemala.webp";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

// import optional lightbox plugins
import "yet-another-react-lightbox/plugins/thumbnails.css";

export function Places() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",

        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 1,
        y: "0",
        delay: 0,
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-grow justify-center z-0">
      <div className="w-[80%]  flex-col justify-center mb-20">
        <div>
          <HeaderCat
            Title={"Places"}
            Description={
              "We live on an expansive earth full of natural wonders, history, and cultures. I enjoy traveling and capturing what I experience. Here is a little corner on the internet where I can share those places as I have seen and experienced them."
            }
          />
        </div>

        <div
          className="  grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          ref={comp}
        >
          <div id="title-1">
            <HorizontalCard
              image={NewYorkImg}
              title="🏙️ New York"
              altText="New York Photos"
              className="w-[100%] h-full"
              path="/place/newyork" // Add the path prop here
            />
          </div>
          <div id="title-2">
            <HorizontalCard
              image={DRImg}
              title="🇩🇴 Dominican Republic"
              altText="Dominican Republic Photos"
              className="w-[100%] h-full"
              path="/place/dominicanrepublic" // Add the path prop here
            />
          </div>
          <div id="title-3">
            <HorizontalCard
              image={GuatemalImg}
              title="🇬🇹 Guatemala(Coming Soon)"
              altText="Guatemala Photos"
              className="w-[100%] h-full cursor-default"
              path="/places" // Add the path prop here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
