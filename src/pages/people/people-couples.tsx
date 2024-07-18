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
import { coupleMappedPhotos } from "./people-images";

import { Helmet } from "react-helmet-async";

export function Peoplecouples() {
  const photos = coupleMappedPhotos.map((photo, index) => ({
    ...photo,
    index,
  }));

  const [Index, setIndex] = useState(-1);

  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>People Couples</title>
        <meta
          name="description"
          content="A collection of photos of couples by Fausto Photography."
        />
        <link
          rel="canonical"
          href="https://faustophotography.com/#/people/couples"
        />
      </Helmet>
      <div className="sm:w-[80%] w-[90%] flex-col justify-center">
        <HeaderCat
          Title={"Couples"}
          Description={
            "Human connection through visual storytelling. We all have so much to tell, a unique story to share and photography is one medium to do this visually. Here is a selected collection of images of the people I had the opportunity to photograph. "
          }
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <PreventImageContext>
              <PhotoAlbum
                photos={photos}
                layout="rows"
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
                targetRowHeight={(containerWidth) => {
                  if (containerWidth < 400) return 150;
                  if (containerWidth < 900) return 200;
                  return 400;
                }}
              />

              <Lightbox
                slides={photos}
                open={Index >= 0}
                index={Index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Counter]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                styles={{
                  container: { backgroundColor: "rgba(6, 16, 24, .8)" },
                }}
              />
            </PreventImageContext>
          </div>
        </div>
      </div>
    </div>
  );
}
