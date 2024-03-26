interface LocalPhoto {
  name: string; // Fixed typo here
  width: number;
  height: number;
  alt: string; // Correctly positioned alt property
}



// Corrected function signature, removed misplaced alt property
const resolveImagePath = (folder: string, imagePath: string): string => {
  return new URL(`../../assets/images/places/${folder}/${imagePath}`, import.meta.url).href;
};

//New York photos

const newyorkPhotos: LocalPhoto[] = [
  { name: "3D1A0088-6.webp", width: 2222, height: 1280, alt: "New York Photo" },
  { name: "3D1A0323-2.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "3D1A0534-3.webp", width: 1280, height: 1601, alt: "New York Photo" },
  { name: "3D1A2383-2.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3D1A6424-3.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "3V9A0407-Enhanced-NR.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3V9A0654.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3V9A0910.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3V9A1354.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3V9A1389.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "3V9A3311.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "3V9A3349.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "DSCF0085.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "DSCF0095.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "TIME10ONEXT ATTENDEES-COCKTAIL-FAUSTO-1.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "TIME10ONEXT ATTENDEES-COCKTAIL-FAUSTO-2.webp", width: 1903, height: 1280, alt: "New York Photo" },
  { name: "_D1A0189.webp", width: 1920, height: 1280, alt: "New York Photo" },
  { name: "_D1A0536-2.webp", width: 1280, height: 1920, alt: "New York Photo" },
  { name: "_D1A9669-2.webp", width: 1920, height: 1280, alt: "New York Photo" },
];


//Domincan Republich photos

const dominicanrepublicPhotos: LocalPhoto[] = [

  //hero image
  { name: "SD-DSCF2573.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2589-2.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2608.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2729.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2740.webp", width: 2047, height: 1280, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2744.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2777.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2785.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2789.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  { name: "SD-DSCF2814.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  {  name: "PC-DSCF2425.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "PC-DSCF2482.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  {  name: "PC-DSCF2493.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  {  name: "PC-DSCF2495-2.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "PC-DSCF2533.webp", width: 1280, height: 1920, alt: "Dominican Republic Photo" },
  {  name: "Los-Haitises-DSCF2622.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "Los-Haitises-DSCF2637.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "Los-Haitises-DSCF2663.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "Los-Haitises-DSCF2687.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" },
  {  name: "Los-Haitises-DSCF2700.webp", width: 1920, height: 1280, alt: "Dominican Republic Photo" }
];




// This mapping function is correctly defined now
const mapPhotos = (folder: string, photos: LocalPhoto[]) => photos.map(photo => ({
  src: resolveImagePath(folder, photo.name),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
}));

// Exporting both photo arrays after mapping
export const newyorkMappedPhotos = mapPhotos("newyork", newyorkPhotos);
export const dominicanrepublicPhotosMappedPhotos = mapPhotos("dominicanrepublic", dominicanrepublicPhotos);

