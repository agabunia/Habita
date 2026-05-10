export type HistoryItem = {
  id: number;
  projectId: number;
  title: string;
  description: string;
  developer: string;
  category: string;
  logoLocation: string;
  imageLocation: string;
  type: "article" | "video";
  layout: "split" | "stacked";
  dateTime: string;
  displayTime: string;
};

export const historyItems: HistoryItem[] = [
  {
    id: 1,
    projectId: 4,
    title: "A new living space is waiting",
    description:
      "Living spaces where quality, comfort, and thoughtful design come together to shape the life you deserve. Living spaces where quality, comfort, and thoughtful design come together shape the life you deserve.",
    developer: "Blox",
    category: "Project",
    logoLocation: "blox.jpg",
    imageLocation: "img_4.jpg",
    type: "article",
    layout: "split",
    dateTime: "2026-05-10T13:45:00",
    displayTime: "3 Apr, 13:45",
  },
  {
    id: 2,
    projectId: 5,
    title: "A new living space is waiting",
    description:
      "Living spaces where quality, comfort, and thoughtful design come together to shape the life you deserve. Living spaces where quality, comfort, and thoughtful design come together.",
    developer: "BLOX",
    category: "Video",
    logoLocation: "blox.jpg",
    imageLocation: "img_5.jpg",
    type: "video",
    layout: "stacked",
    dateTime: "2026-05-03T13:45:00",
    displayTime: "3 Apr, 13:45",
  },
];
