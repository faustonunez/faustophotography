import PhotoAlbum from "react-photo-album";

// Assuming this structure for each photo, adjust as necessary
interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

// Extend the interface to include resolvedPhotos
interface GallerySectionProps {
  title: string;
  resolvedPhotos: Photo[]; // Adding resolvedPhotos prop
  layout?: "rows" | "columns" | "masonry"; // Add more layout types if needed
}

export function GallerySection({
  title,
  resolvedPhotos,
  layout = "rows", // Default layout is 'rows'
}: GallerySectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="w-full flex items-start">{title}</h2>
      <PhotoAlbum
        layout={layout} // Use the layout prop dynamically
        padding={0}
        spacing={8}
        photos={resolvedPhotos}
        targetRowHeight={600}
        columns={(containerWidth) => {
          if (containerWidth < 600) return 2;
          if (containerWidth < 768) return 2;
          if (containerWidth < 1600) return 2;
          if (containerWidth < 2000) return 3;
          return 4;
        }}
        componentsProps={{
          imageProps: { loading: "lazy" },
        }}
      />
    </div>
  );
}
