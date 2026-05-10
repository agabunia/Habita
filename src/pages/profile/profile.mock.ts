export type ProfileTab = {
  id: "projects" | "history" | "developers";
  label: string;
  to: string;
  end?: boolean;
};

export type ProfileUser = {
  name: string;
  id: string;
};

export const profileUser: ProfileUser = {
  name: "Gigi Nikoleishvili",
  id: "487594563",
};

export const profileTabs: ProfileTab[] = [
  {
    id: "projects",
    label: "My projects",
    to: "/profile",
    end: true,
  },
  {
    id: "history",
    label: "My history",
    to: "/profile/history",
  },
  {
    id: "developers",
    label: "My developers",
    to: "/profile/developers",
  },
];
