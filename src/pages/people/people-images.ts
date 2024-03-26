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
  { name: "_N_L6034.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L6019.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L5992.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L5956.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L5874.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L5792.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L05012.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L05010.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L05007.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "_N_L05003.webp", width: 1920, height: 1280, alt: "Couples Image" },
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
  { name: "Aida_and_Steve_Outdoor-46.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "Aida_and_Steve_Outdoor-32.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "Aida_and_Steve_Ceremony-95.webp", width: 1920, height: 1280, alt: "Couples Image" },
  { name: "Aida_and_Steve_Ceremony-50.webp", width: 1280, height: 1920, alt: "Couples Image" },
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
  { name: "_MG_9307.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_MG_9316.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_MG_9348.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_MG_9390.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_N_L9703.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_N_L9771.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_N_L9888.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_N_L9896.webp", width: 1920, height: 1280, alt: "Event Image" },
  { name: "_N_L9986.webp", width: 1920, height: 1280, alt: "Event Image" },
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
export const portraitMappedPhotos = mapPhotos("portraits", portraitPhotos);
export const coupleMappedPhotos = mapPhotos("couples", couplePhotos);
export const eventsMappedPhotos = mapPhotos("events", eventsPhotos);
