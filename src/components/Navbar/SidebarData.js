import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    clsname: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsFillInfoCircleFill />,
    clsname: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <BiIcons.BiCodeAlt />,
    clsname: "nav-text",
  },
  {
    title: "Contact me",
    path: "/resume",
    icon: <FiIcons.FiPhoneCall />,
    clsname: "nav-text",
  },
];
