import type { NavItem, SocialLink } from "./header.types";

export const navItems: NavItem[] = [
  { label: "მთავარი გვერდი", to: "/" },
  { label: "დეველოპერები", to: "/developers" },
  { label: "პროექტები", to: "/projects" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/", content: "f" },
  { label: "Instagram", href: "https://www.instagram.com/", content: "◎" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", content: "in" },
];