export type GalleryItemType = {
  id: number;
  developer_id: number;
  type: "photo" | "video";
  image_location: string;
  video_url?: string;
  title_geo?: string;
  title_eng?: string;
  date: string;
};

export const galleryItems: GalleryItemType[] = [
  {
    id: 1,
    developer_id: 1,
    type: "photo",
    image_location: "img_1.jpg",
    title_geo: "პროექტის სახედი",
    title_eng: "Project Exterior",
    date: "2024-01-15",
  },
  {
    id: 2,
    developer_id: 1,
    type: "photo",
    image_location: "img_2.jpg",
    title_geo: "საცხოვრებელი სივრცე",
    title_eng: "Living Space",
    date: "2024-01-20",
  },
  {
    id: 3,
    developer_id: 1,
    type: "photo",
    image_location: "img_3.jpg",
    title_geo: "მოდერნული დიზაინი",
    title_eng: "Modern Design",
    date: "2024-01-25",
  },
  {
    id: 4,
    developer_id: 1,
    type: "photo",
    image_location: "img_4.jpg",
    title_geo: "შიგა დეკორაცია",
    title_eng: "Interior Design",
    date: "2024-02-01",
  },
  {
    id: 5,
    developer_id: 1,
    type: "video",
    image_location: "img_1.jpg",
    video_url: "https://www.youtube.com/embed/4IdWX_5CjLQ",
    title_geo: "მშენებლობის პროცესი",
    title_eng: "Construction Process",
    date: "2024-02-05",
  },
  {
    id: 6,
    developer_id: 1,
    type: "photo",
    image_location: "img_5.jpg",
    title_geo: "ფასადი",
    title_eng: "Building Facade",
    date: "2024-02-10",
  },
  {
    id: 7,
    developer_id: 1,
    type: "photo",
    image_location: "img_6.jpg",
    title_geo: "მდელოს პარკი",
    title_eng: "Meadow Park",
    date: "2024-02-15",
  },
  {
    id: 8,
    developer_id: 1,
    type: "video",
    image_location: "img_3.jpg",
    video_url: "https://www.youtube.com/embed/4IdWX_5CjLQ",
    title_geo: "ვირტუალური ტური",
    title_eng: "Virtual Tour",
    date: "2024-02-20",
  },
  {
    id: 9,
    developer_id: 1,
    type: "photo",
    image_location: "img_4.jpg",
    title_geo: "ღია სურ",
    title_eng: "Clear Horizons",
    date: "2024-02-25",
  },
  {
    id: 10,
    developer_id: 1,
    type: "photo",
    image_location: "img_1.jpg",
    title_geo: "მდელოს ხედი",
    title_eng: "Meadow View",
    date: "2024-03-01",
  },
  {
    id: 11,
    developer_id: 1,
    type: "photo",
    image_location: "img_2.jpg",
    title_geo: "რკინის კვარტირა",
    title_eng: "Iron Quarters",
    date: "2024-03-05",
  },
  {
    id: 12,
    developer_id: 1,
    type: "video",
    image_location: "img_5.jpg",
    video_url: "https://www.youtube.com/embed/4IdWX_5CjLQ",
    title_geo: "პროექტის ფილმი",
    title_eng: "Project Film",
    date: "2024-03-10",
  },
  {
    id: 13,
    developer_id: 1,
    type: "photo",
    image_location: "img_5.jpg",
    title_geo: "ღვინის პლაკოს",
    title_eng: "Wine Court",
    date: "2024-03-15",
  },
  {
    id: 14,
    developer_id: 1,
    type: "photo",
    image_location: "img_6.jpg",
    title_geo: "მწვანე სიდან",
    title_eng: "Green Side",
    date: "2024-03-20",
  },
  {
    id: 15,
    developer_id: 1,
    type: "photo",
    image_location: "img_3.jpg",
    title_geo: "ღეფის პროექტი",
    title_eng: "Luxury Project",
    date: "2024-03-25",
  },
];

export const getGalleryByDeveloper = (developerId: number): GalleryItemType[] => {
  return galleryItems.filter((item) => item.developer_id === developerId);
};

export const getGalleryByType = (
  developerId: number,
  type?: "photo" | "video"
): GalleryItemType[] => {
  const developerGallery = getGalleryByDeveloper(developerId);
  if (!type) return developerGallery;
  return developerGallery.filter((item) => item.type === type);
};
