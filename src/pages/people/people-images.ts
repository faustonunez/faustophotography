interface LocalPhoto {
  name: string; // Fixed typo here
  width: number;
  height: number;
  alt: string; // Correctly positioned alt property
}



// Corrected function signature, removed misplaced alt property
const resolveImagePath = (folder: string, imagePath: string): string => {
  return new URL(`../../assets/images/people/${folder}/${imagePath}`, import.meta.url).href;
};

//people photos

const portraitPhotos: LocalPhoto[] = [

  
  { name: "3V9A3598.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "3V9A3734.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "3V9A3852.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "3V9A1827.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "3V9A2828.webp", width: 1920, height: 1280, alt: "Portrait Image" },

  { name: "D1A2324.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A2549.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A2606.webp", width: 1280, height: 1978, alt: "Portrait Image" },
  { name: "D1A3117.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A6201.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A6782.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A7025.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A7217.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A7472.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  
  { name: "3D1A0463.webp", width: 1920, height: 1280, alt: "Portraits Image" },
  { name: "3D1A0175.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "3D1A0561.webp", width: 1280, height: 1920, alt: "Portrait Image" },
  { name: "D1A0273.webp", width: 1280, height: 1920, alt: "Portrait Image" },
];

const couplePhotos: LocalPhoto[] = [
  { name: "NL6034.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL6019.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL5992.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL5956.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL5874.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL5792.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL05012.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL05010.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL05007.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "NL05003.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF5142.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "DSCF5100.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF5085.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF5077.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "DSCF4895.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF4861.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF4838.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "DSCF4829.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF4817.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF4730.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "DSCF4712.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "DSCF4647.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "DSCF4577.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "AidaandSteveOutdoor46.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "AidaandSteveOutdoor32.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "AidaandSteveCeremony95.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "AidaandSteveCeremony50.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A1873.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "3D1A1840.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A1665.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A1519.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A1514.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A0368.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "3D1A0231.webp", width: 1280, height: 1920, alt: "Couples Image" },
  { name: "3D1A0189.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "3D1A0142.webp", width: 1280, height: 1920, alt: "Couples Image" },
];




// This mapping function is correctly defined now
const mapPhotos = (folder: string, photos: LocalPhoto[]) => photos.map(photo => ({
  src: resolveImagePath(folder, photo.name),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
}));

// Exporting both photo arrays after mapping
export const portraitMappedPhotos = mapPhotos("portraits", portraitPhotos);
export const coupleMappedPhotos = mapPhotos("couples", couplePhotos);

