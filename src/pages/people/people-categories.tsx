// import PhotoAlbum and Lightbox
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { HeaderCat } from "@/components/header-category";
import { HorizontalCard } from "@/components/cards";
import PortraitsImg from "../../assets/images/people/_people-sections/people-portraits.webp";
import CouplesImg from "../../assets/images/people/_people-sections/people-couples.webp";
import StoriesImg from "../../assets/images/people/_people-sections/people-stories-2.webp";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

// import optional lightbox plugins
import "yet-another-react-lightbox/plugins/thumbnails.css";

export function People() {
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
    <div className=" flex flex-grow justify-center z-0">
      <div className="w-[80%] flex-col justify-center mb-20">
        <div>
          <HeaderCat
            Title={"People"}
            Description={
              "Human connection through visual storytelling. We all have so much to tell, a unique story to share and photography is one medium to do this visually. Here is a selected collection of images of the people I had the opportunity to photograph. "
            }
          />
        </div>

        <div
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 "
          ref={comp}
        >
          <div id="title-1">
            <HorizontalCard
              image={PortraitsImg}
              title="Portraits"
              altText="Portraits Photos"
              className="w-[100%] h-full"
              path="/people/portraits" // Add the path prop here
            />
          </div>
          <div id="title-2">
            <HorizontalCard
              image={CouplesImg}
              title="Couples"
              altText="Couples Photos"
              className="w-[100%] h-full"
              path="/people/couples" // Add the path prop here
            />
          </div>
          <div id="title-3">
            <HorizontalCard
              image={StoriesImg}
              title="Stories (Coming Soon)"
              altText="Stories Photos (Coming Soon)"
              className="w-[100%] h-full cursor-default"
              path="/people" // Add the path prop here
            />
          </div>
        </div>
      </div>
    </div>
  );
}
