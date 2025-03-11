import React from "react";
import "../Socials/Style.scss";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
} from "react-icons/ai";

const socialIcons = [
  {
    Component: AiOutlineGithub,
    link: "https://github.com/dev-palwar",
  },
  {
    Component: AiFillTwitterCircle,
    link: "https://twitter.com/dev_palwar2",
  },
  {
    Component: AiFillLinkedin,
    link: "https://www.linkedin.com/in/dev-palwar/",
  },
  // {
  //   Component: SiLeetcode,
  //   color: "#f79c16",
  //   link: "https://leetcode.com/u/devpalwar/",
  // },
];

const Socials = () => {
  return (
    <div className="icons" style={{ marginLeft: "5px" }}>
      {socialIcons.map(({ Component, color, link }, index) => (
        <a href={link} target="_blank" rel="noreferrer" key={index}>
          <Component style={{ color }} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
