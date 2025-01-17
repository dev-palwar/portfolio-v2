import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="info-section">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <motion.h1 {...animations.h1}>Hi, I am Dev</motion.h1>
              <motion.h3 {...animations.fade}>A software developer</motion.h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3 style={{ fontWeight: "600", lineHeight: "2rem" }}>
                More about me -{" "}
              </h3>
              <p>
                👋 Hi there! I'm Dev a passionate web developer. I have a strong
                background in frontend development using React and typescript,
                as well as experience with various JavaScript and CSS libraries
                and frameworks such as Next.JS and Tailwind. 🌐 In addition to
                my frontend expertise, I have a decent understanding of backend
                technologies like Node.js and Express.js. This knowledge enables
                me to collaborate effectively with backend teams, bridging the
                gap between the front and back ends of web development projects.
                🚀 I'm excited to continue my journey in the tech world, eager
                to learn and contribute to innovative projects. Let's connect
                and explore opportunities together!
              </p>
            </div>
          </div>
          <ul>
            <li>
              <p>
                worked with few startups :{" "}
                <Link to={"/exp"}>
                  <span>learn more</span>
                </Link>
              </p>
            </li>
            <li>
              <p>
                building side projects in meantime :{" "}
                <Link to={"/work"}>
                  <span>show</span>
                </Link>
              </p>
            </li>
            <li>
              <p>
                solving leetcode sometime :{" "}
                <Link to={"https://leetcode.com/u/devpalwar/"} target="_blank">
                  <span>show</span>
                </Link>
              </p>
            </li>
          </ul>
          <Socials />
        </div>
        {/* <div className="image-section">
          <img src={meString} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Home;
