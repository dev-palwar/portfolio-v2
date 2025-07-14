import React from "react";
import "../Home/Style.scss";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";
import { Link } from "react-router-dom";
import Tools from "../../Components/Tools/Tools";

const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
                Hey there! I'm Dev - and yes, that's my real name! In what might
                be the universe's most fitting coincidence, I also happen to be
                a developer. Talk about destiny, right?. Well I'm currently
                pursuing my Master's in Computer Applications. My aim is to
                learn everything quickly and graduate at a senior level that's
                why I like to work with startups. I also do freelance work when
                I have nothing to do or just build cool stuff and share it on
                twt to impress those cool anime dp anons. So far I have worked
                with Javascript, on both frontend and backend. Right now, I'm
                learning and doing Android Development and getting hands-on with
                open-source projects.
              </p>
            </div>
            <Tools />
          </div>
          <ul>
            <li>
              <p>
                Places I've worked at so far :{" "}
                <Link to={"/exp"}>
                  <span>show</span>
                </Link>
              </p>
            </li>
            <li>
              <p>
                Projects I built while learning :{" "}
                <Link to={"/work"}>
                  <span>show</span>
                </Link>
              </p>
            </li>
            <li>
              <p>
                This is my mental gym btw :{" "}
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
