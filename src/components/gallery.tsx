export function gallery() {
  return (
    <div>
      <PhotoAlbum
        photos={portraitMappedPhotos}
        layout="rows"
        targetRowHeight={600}
        onClick={({ index }) => setPortraitIndex(index)}
        spacing={8}
        componentsProps={{
          imageProps: { loading: "lazy" },
        }}
      />
      <Lightbox
        slides={portraitMappedPhotos}
        open={portraitIndex >= 0}
        index={portraitIndex}
        close={() => setPortraitIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
    </div>
  );
}
