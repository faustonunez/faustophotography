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
import { eventsMappedPhotos } from "./events-images";

export function Events() {
  const photos = eventsMappedPhotos.map((photo, index) => ({
    ...photo,
    index,
  }));

  const [Index, setIndex] = useState(-1);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex-col justify-center">
        <HeaderCat
          Title={"Events"}
          Description={
            "It is always a pleasure to team up with brands and organizations to bring their events to life through photography. There's something truly magical about being surrounded by the vibrant energy of these gatherings and having the opportunity to capture all those fun, spontaneous moments. "
          }
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-[8px]">
            <PreventImageContext>
              <PhotoAlbum
                photos={photos.slice(0, 2)}
                layout="rows"
                targetRowHeight={300}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />
              <PhotoAlbum
                photos={photos.slice(2, 41)}
                layout="rows"
                targetRowHeight={300}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />

              <Lightbox
                slides={photos}
                open={Index >= 0}
                index={Index}
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
