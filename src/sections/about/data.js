import { FaAward } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaDocker } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const data = [
  { id: 1, icon: <FaAward />, title: "Experience", desc: "11+ Years Working" },
  { id: 2, icon: <RiReactjsLine />, title: "React", desc: "3+ Years Working" },
  { id: 3, icon: <IoLogoNodejs />, title: "Node.js", desc: "1+ Year Working" },
  {
    id: 4,
    icon: <IoLogoJavascript />,
    title: "Javascript",
    desc: "5+ Years Working",
  },
  { id: 5, icon: <IoLogoCss3 />, title: "CSS", desc: "8+ Years Working" },
  { id: 6, icon: <IoLogoSass />, title: "SASS/SCSS", desc: "4+ Years Working" },
  {
    id: 7,
    icon: <SiAdobephotoshop />,
    title: "Adobe Photoshop",
    desc: "11+ Years Working",
  },
  {
    id: 8,
    icon: <SiAdobeillustrator />,
    title: "Adobe Illustrator",
    desc: "11+ Years Working",
  },
  {
    id: 9,
    icon: <SiMongodb />,
    title: "Mongodb",
    desc: "1+ Year Working",
  },
  {
    id: 10,
    icon: <FaDocker />,
    title: "Docker",
    desc: "2+ Years Working",
  },
];

export default data;
