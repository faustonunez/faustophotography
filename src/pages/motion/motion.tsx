import { HeaderCat } from "@/components/header-category";
import { YoutubePlayer } from "@/components/youtube-player";
import { VimeoPlayer } from "@/components/vimeo-player";
import { Helmet } from "react-helmet-async";

export function Motion() {
  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <title>Motion</title>
        <meta
          name="description"
          content="Gallery of video projects by Fausto Photography."
        />
        <link rel="canonical" href="https://faustophotography.com/#/motion" />
      </Helmet>
      <div className="w-[80%] flex flex-col justify-center">
        <HeaderCat
          Title={"Motion"}
          Description={
            "Video is another medium I enjoy exploring, offering additional elements like sound and motion. Below is a selection of my video projects."
          }
        />
        <div className="flex flex-col gap-20">
          <div>
            <h3>Video Portraits</h3>
            <div className=" video-section ">
              <VimeoPlayer videoLink="https://player.vimeo.com/video/230703668?h=71460ed841&title=0&byline=0&portrait=0" />

              <VimeoPlayer videoLink="https://player.vimeo.com/video/230703049?h=71460ed841&title=0&byline=0&portrait=0" />
            </div>
          </div>

          <div>
            <h3>Aerial</h3>
            <div className="video-section">
              <VimeoPlayer videoLink="https://player.vimeo.com/video/219452351?h=71460ed841&title=0&byline=0&portrait=0" />
              <VimeoPlayer videoLink="https://player.vimeo.com/video/212692257?h=71460ed841&title=0&byline=0&portrait=0" />
            </div>
          </div>

          <div>
            <div>
              <h3>Travel</h3>
              <div className="video-section">
                <YoutubePlayer videoId="jqvIt4-wAv4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
