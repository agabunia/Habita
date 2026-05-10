export type ProjectListing = {
  id: number;
  developer: string;
  name: string;
  address: string;
  imageLocation: string;
  status?: string;
  badge?: string;
  isSaved?: boolean;
};

export const projectsResultTotal = 34;

export const projectListings: ProjectListing[] = [
  {
    id: 1,
    developer: "BLOX",
    name: "BLOX | Lisi",
    address: "Tbilisi, Lisi Lake District N64",
    imageLocation: "img_1.jpg",
    status: "Available",
    isSaved: true,
  },
  {
    id: 2,
    developer: "BLOX",
    name: "BLOX | Saburtalo",
    address: "Tbilisi, Kazbegi Avenue N64",
    imageLocation: "img_2.jpg",
    badge: "10 000$ - 12 033$",
  },
  {
    id: 3,
    developer: "BLOX",
    name: "BLOX | Dighomi",
    address: "Tbilisi, King Mirian Street N64",
    imageLocation: "img_3.jpg",
  },
  {
    id: 4,
    developer: "BLOX",
    name: "BLOX | Vake",
    address: "Tbilisi, Abashidze Street N44",
    imageLocation: "img_4.jpg",
  },
  {
    id: 5,
    developer: "BLOX",
    name: "BLOX | Kojori",
    address: "Kojori, Mountain Road N64",
    imageLocation: "img_5.jpg",
    status: "Sold out",
  },
  {
    id: 6,
    developer: "BLOX",
    name: "BLOX | Ortachala",
    address: "Tbilisi, Gorgasali Street N64",
    imageLocation: "img_6.jpg",
  },
  {
    id: 7,
    developer: "Archi",
    name: "Archi | Lake House",
    address: "Tbilisi, Lisi View N12",
    imageLocation: "img_1.jpg",
    status: "Available",
  },
  {
    id: 8,
    developer: "m2",
    name: "m2 | Skyline",
    address: "Tbilisi, University Street N8",
    imageLocation: "img_2.jpg",
  },
  {
    id: 9,
    developer: "Deka",
    name: "Deka | Garden",
    address: "Tbilisi, Politkovskaya Street N18",
    imageLocation: "img_3.jpg",
  },
];
