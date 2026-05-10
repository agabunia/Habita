export type ProfileProject = {
  id: number;
  developer: string;
  name: string;
  address: string;
  imageLocation: string;
  status?: string;
  badge?: string;
  saved?: boolean;
};

export const profileProjects: ProfileProject[] = [
  {
    id: 1,
    developer: "BLOX",
    name: "BLOX | Lisi",
    address: "Tbilisi, Lisi Lake District N64",
    imageLocation: "img_1.jpg",
    status: "Available",
    saved: true,
  },
  {
    id: 2,
    developer: "BLOX",
    name: "BLOX | Saburtalo",
    address: "Tbilisi, Kazbegi Avenue N64",
    imageLocation: "img_2.jpg",
    badge: "10 000$ - 12 033$",
    saved: true,
  },
  {
    id: 3,
    developer: "Deka",
    name: "BLOX | Dighomi",
    address: "Tbilisi, King Mirian Street N64",
    imageLocation: "img_3.jpg",
    saved: true,
  },
  {
    id: 4,
    developer: "BLOX",
    name: "BLOX | Vake",
    address: "Tbilisi, Abashidze Street N44",
    imageLocation: "img_4.jpg",
    saved: true,
  },
];
