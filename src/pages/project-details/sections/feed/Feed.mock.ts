export type FeedItemType = {
  id: number;
  developer_id: number;
  type: "image" | "video";
  content_location?: string;
  video_url?: string;
  title_geo?: string;
  title_end?: string;
  description_geo?: string;
  description_end?: string;
  date: string;
};

export const feedItems: FeedItemType[] = [
  {
    id: 1,
    developer_id: 1,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "ახალი პროექტი",
    title_end: "New Project Launch",
    description_geo: "ჩვენი ახალი ფლაგმენენი პროექტი ხელმისაწვდომი ხარისხითა და თანამედროვე დიზაინით.",
    description_end: "Our latest flagship project showcasing premium quality and modern design.",
    date: "2024-01-15",
  },
  {
    id: 2,
    developer_id: 1,
    type: "video",
    video_url: "https://www.youtube.com/embed/4IdWX_5CjLQ",
    title_geo: "პროექტის ტური",
    title_end: "Project Tour",
    description_geo: "გაიცანით ჩვენი ახალი პროექტის ყველა დეტალი ვიდეო ტურის საშუალებით.",
    description_end: "Explore every detail of our new project through an immersive video tour.",
    date: "2024-01-20",
  },
  {
    id: 3,
    developer_id: 1,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "დიზაინ კონცეფცია",
    title_end: "Design Concept",
    description_geo: "მოდერნული დიზაინი და კლასიკური კომფორტი ერთ პროექტში.",
    description_end: "Modern design meets classic comfort in our newest concept.",
    date: "2024-01-25",
  },
  {
    id: 4,
    developer_id: 1,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 2,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 3,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 4,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 5,
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
];
