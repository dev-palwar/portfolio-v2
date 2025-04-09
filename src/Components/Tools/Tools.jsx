import React, { useState } from "react";
import "../Tools/Style.scss";
import {
  BiLogoGraphql,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoJava,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoRedux,
  BiLogoPostgresql,
  BiLogoFirebase,
  BiLogoDocker,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress, SiVite, SiWebpack } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const tools = [
  { Component: BiLogoGraphql, name: "GraphQL" },
  { Component: BiLogoReact, name: "React" },
  { Component: BiLogoNodejs, name: "Node.js" },
  { Component: BiLogoJavascript, name: "JavaScript" },
  { Component: BiLogoTypescript, name: "TypeScript" },
  { Component: BiLogoMongodb, name: "MongoDB" },
  { Component: BiLogoPython, name: "Python" },
  { Component: BiLogoJava, name: "Java" },
  { Component: SiExpress, name: "Express" },
  { Component: BiLogoHtml5, name: "HTML5" },
  { Component: BiLogoCss3, name: "CSS3" },
  { Component: BiLogoSass, name: "Sass" },
  { Component: BiLogoRedux, name: "Redux" },
  { Component: BiLogoPostgresql, name: "PostgreSQL" },
  { Component: BiLogoFirebase, name: "Firebase" },
  { Component: BiLogoDocker, name: "Docker" },
  { Component: SiWebpack, name: "Webpack" },
  { Component: BiLogoTailwindCss, name: "Tailwind" },
  { Component: SiVite, name: "Vite" },
  { Component: RiNextjsFill, name: "Next.js" },
];

const Tools = () => {
  const [hoveredTech, setHoveredTech] = useState("");

  return (
    <div className="tools-section">
      {/* <h2>Tools that I have used</h2> */}
      <div className="tools-icons">
        <div className="icon-slider">
          {tools.map(({ Component, name }, index) => (
            <div
              key={index}
              className="tool-icon"
              onMouseEnter={() => setHoveredTech(name)}
              onMouseLeave={() => setHoveredTech("")}
            >
              <Component />
              {hoveredTech === name && (
                <span className="tech-name" style={{ marginLeft: "10px" }}>
                  {name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
