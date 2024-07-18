// import PhotoAlbum and Lightbox
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { HeaderCat } from "@/components/header-category";
import PreventImageContext from "@/components/PreventImageContext";
import { YoutubePlayer } from "@/components/youtube-player";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

// Update this import to match the new exports
import { dominicanrepublicPhotosMappedPhotos } from "./places-images";

import { Helmet } from "react-helmet-async";

export function DominicanrepublicPlaces() {
  const photos = dominicanrepublicPhotosMappedPhotos.map((photo, index) => ({
    ...photo,
    index,
  }));

  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>Dominican Republic</title>
        <meta
          name="description"
          content="A collection of photos of the Dominican Republic by Fausto Photography."
        />
        <link
          rel="canonical"
          href="https://faustophotography.com/#/place/dominicanrepublic"
        />
      </Helmet>
      <div className="sm:w-[80%] w-[90%] flex-col justify-center">
        <HeaderCat
          Title={"Dominican Republic"}
          Description={
            "It was my second visit to the Dominican Republic, and it was a treat to experience its rich culture once again. From strolling the streets of Zona Colonial in Santo Domingo to waking up to beautiful sunrises by the beach in Punta Cana, it was an experience. "
          }
        />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <h3>Santo Domingo</h3>
            <PreventImageContext>
              <PhotoAlbum
                photos={photos.slice(0, 10)}
                layout="rows"
                targetRowHeight={(containerWidth) => {
                  if (containerWidth < 400) return 150;
                  if (containerWidth < 900) return 200;
                  return 500;
                }}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />
              <h3>Punta Cana</h3>
              <PhotoAlbum
                photos={photos.slice(11, 15)}
                layout="rows"
                targetRowHeight={(containerWidth) => {
                  if (containerWidth < 400) return 150;
                  if (containerWidth < 900) return 200;
                  return 500;
                }}
                onClick={({ photo: { index } }) => setIndex(index)}
                componentsProps={{
                  imageProps: { loading: "lazy" },
                  containerProps: { style: { marginBottom: 10 } },
                }}
                spacing={8}
              />
              <YoutubePlayer videoId="jqvIt4-wAv4" />
              <h3>Los Haitises</h3>
              <PhotoAlbum
                photos={photos.slice(15, 19)}
                layout="rows"
                targetRowHeight={400}
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
