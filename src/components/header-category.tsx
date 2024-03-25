import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

interface HeaderCatProps {
  Title: string;
  Description: string;
}

export function HeaderCat({ Title, Description }: HeaderCatProps) {
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
    <div className="w-full flex justify-center mb-10" ref={comp}>
      <div
        className="flex flex-col justify-center gap-5 w-[90%] sm:w-[70%] text-center items-center"
        id="title-1"
      >
        {/* Adding unique IDs or classes for animation targets */}
        <h1 className="animate-title">{Title}</h1>
        <p className="sm:w-[50%] w-[100%] animate-title">{Description}</p>
      </div>
    </div>
  );
}
