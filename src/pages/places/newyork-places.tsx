// import PhotoAlbum and Lightbox
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { HeaderCat } from "@/components/header-category";
import PreventImageContext from "@/components/PreventImageContext";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

// Update this import to match the new exports
import { newyorkMappedPhotos } from "./places-images";

export function NewyorkPlaces() {
  const photos = newyorkMappedPhotos.map((photo, index) => ({
    ...photo,
    index,
  }));

  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex-col justify-center">
        <HeaderCat
          Title={"New York"}
          Description={
            "One of the reasons for my love of photography stems from living in NYC, a place like no other. Picking up a camera and walking through NYC is just meant to be; one simply can’t resist capturing life in this place. A small collection of what I like to call “NYC moments”."
          }
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <PreventImageContext>
              <PhotoAlbum
                photos={photos}
                layout="rows"
                targetRowHeight={600}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />

              <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Counter]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              />
            </PreventImageContext>
          </div>
        </div>
      </div>
    </div>
  );
}
