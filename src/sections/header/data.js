import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const data = [
  { id: 1, link: "https://instagram.com", icon: <AiOutlineInstagram /> },
  { id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
  { id: 3, link: "https://dribbble.com", icon: <AiOutlineDribbble /> },
  { id: 4, link: "https://github.com", icon: <AiFillGithub /> },
];

export default data;

export const primaryColors = [
  { className: "color-1" },
  { className: "color-2" },
  { className: "color-3" },
  { className: "color-4" },
  { className: "color-5" },
  { className: "color-6" },
];

export const backgroundColors = [{ className: "bg-1" }, { className: "bg-2" }];
