interface LocalPhoto {
  name: string; // Fixed typo here
  width: number;
  height: number;
  alt: string; // Correctly positioned alt property
}



// Corrected function signature, removed misplaced alt property
const resolveImagePath = (folder: string, imagePath: string): string => {
  return new URL(`../../assets/images/events/${folder}/${imagePath}`, import.meta.url).href;
};


//events photos

const eventsPhotos: LocalPhoto[] = [
 
  { name: "9R0A8183.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8187.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8279.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8287.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8347.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8354.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8360.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "9R0A8507.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "Elon-Musk-8413.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "Elon-Musk-9562.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "Elon-Musk-9582.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Ambient-FAUSTO-0088.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Ambient-FAUSTO-1897.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-BLOCPOWER-FAUSTO-2183.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Cocktail-FAUSTO-1925.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Cocktail-FAUSTO-2047.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Cocktail-FAUSTO-2059.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Cocktail-FAUSTO-2087.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Stage-FAUSTO-0172.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Stage-FAUSTO-0209.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "PYO-Stage-FAUSTO-2164.webp", width: 1924, height: 1280, alt: "Event Image" }, // Note the width here is 1924, slightly different
  { name: "PYO-Stage-FAUSTO-2210.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "MG9307.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "MG9316.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "MG9348.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "MG9390.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "NL9703.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "NL9771.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "NL9888.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "NL9896.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "NL9986.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "3D1A9658.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4291.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4332.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4348.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4390.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4395.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4571.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4588.webp", width: 1280, height: 1920, alt: "Event Image" },
  { name: "3V9A4630.webp", width: 1280, height: 1920, alt: "Event Image" },
];


// This mapping function is correctly defined now
const mapPhotos = (folder: string, photos: LocalPhoto[]) => photos.map(photo => ({
  src: resolveImagePath(folder, photo.name),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
}));

// Exporting both photo arrays after mapping
export const eventsMappedPhotos = mapPhotos("all-events", eventsPhotos);
