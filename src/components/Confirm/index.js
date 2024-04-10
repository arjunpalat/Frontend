import Navbar from "./Navbar";
import Footer from "./Footer";
import MailContainer from "./MailContainer";
import MailHeader from "./MailHeader";
import Text from "./Text";
import MailTexts from "./MailTexts";
import LinkSection from "./LinkSection";
import SocialHandle from "./SocialHandle";
import Copyright from "./Copyright";

const item1 = [
  "Go Pro!",
  "Explore design work",
  "Design blog",
  "Overtime podcast",
  "Playoffs",
  "Weekly Warm-up",
  "Refere a Friend",
  "Code of conduct",
];

const item2 = [
  "Post a job opening",
  "Post a freelance project",
  "Search for designers",
];
const item3 = ["Advertise with us"];
const item4 = [
  "About",
  "Careers",
  "Support",
  "Media Kit",
  "Testimonials",
  "API",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
];
const item5 = [
  "Design jobs",
  "Designers for hire",
  "Freelance designers for hire",
  "Tags",
  "Places",
];
const item6 = [
  "Dribbble Marketplace",
  "Creative Market",
  "Footspring",
  "Font Squirrel",
];
const item7 = [
  "Freelancing",
  "Design Hiring",
  "Design Portfolio",
  "Design Education",
  "Creative Process",
  "Design Industry Trends",
];

export const linkSections = [
  { title: "For designers", items: item1 },
  {
    groupedSections: [
      { title: "Hire designers", items: item2 },
      { title: "Brands", items: item3 },
    ],
  },
  { title: "Directories", items: item5 },
  { title: "Design Assets", items: item6 },
  { title: "Design Resources", items: item7 },
];

export {
  Navbar,
  Footer,
  MailContainer,
  MailHeader,
  Text,
  MailTexts,
  LinkSection,
  SocialHandle,
  Copyright,
};
