import { ImFolderOpen } from "react-icons/im";
import { BsInfoSquareFill } from "react-icons/bs";

export const data = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About", icon: <BsInfoSquareFill /> },
  { id: 4, link: "#portfolio", title: "Portfolio", icon: <ImFolderOpen /> },
  { id: 5, link: "#contact", title: "Contact" },
];

export const backgroundColors = [{ className: "bg-1" }, { className: "bg-2" }];
