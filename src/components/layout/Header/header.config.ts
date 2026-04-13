import type { NavItem, SocialLink } from "./header.types";

export const navItems: NavItem[] = [
  { label: "მთავარი გვერდი", to: "/" },
  { label: "დეველოპერები", to: "/developers" },
  { label: "პროექტები", to: "/projects" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", content: "f" },
  { label: "Instagram", href: "#", content: "◎" },
  { label: "LinkedIn", href: "#", content: "in" },
];