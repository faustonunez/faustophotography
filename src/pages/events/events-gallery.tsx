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

// React Helmet
import { Helmet } from "react-helmet-async";

export function Events() {
  const photos = eventsMappedPhotos.map((photo, index) => ({
    ...photo,
    index,
  }));

  const [Index, setIndex] = useState(-1);

  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="A collection of photos from various events captured by Fausto Photography."
        />
        <link rel="canonical" href="https://faustophotography.com/#/events" />
      </Helmet>
      <div className="sm:w-[80%] w-[90%] flex-col justify-center">
        <HeaderCat
          Title={"Events"}
          Description={
            "It is always a pleasure to team up with brands and organizations to bring their events to life through photography. There's something truly magical about being surrounded by the vibrant energy of these gatherings and having the opportunity to capture all those fun, spontaneous moments. "
          }
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-[8px]">
            <PreventImageContext>
              <h2 className=" mt-10 mb-4">TIME POY 2021</h2>
              <PhotoAlbum
                photos={photos.slice(0, 11)}
                layout="rows"
                targetRowHeight={300}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />
              <h2 className=" mt-10 mb-4">TIME POY 2022</h2>
              <PhotoAlbum
                photos={photos.slice(12, 22)}
                layout="rows"
                targetRowHeight={300}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />

              <h2 className=" mt-10 mb-4">L'OReal Luxe</h2>
              <PhotoAlbum
                photos={photos.slice(23, 25)}
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
                photos={photos.slice(25, 31)}
                layout="rows"
                targetRowHeight={300}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />
              <h2 className=" mt-10 mb-4">Fashion Week</h2>
              <PhotoAlbum
                photos={photos.slice(32, 35)}
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
                photos={photos.slice(35, 40)}
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
