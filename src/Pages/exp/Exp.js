import { useEffect, useState } from "react";
import "./style.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/dev-palwar/78fc48a3253bd4ab5b58c9fb0b6e3235/raw/a09513e3fa1bf35115950552be7f63dcd4d1a361/gistfile1.txt"
        );
        const data = await response.json();
        setExperiences(data); // wrap single object in array
      } catch (error) {
        console.error("Failed to load experience data", error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section className="experience">
      {/* <div className="experience__current-status">
        <p className="experience__status-text">
          After completing my internship at Lumara Jewels, I took a career break
          to focus on higher studies. <br /> I am currently pursuing a Master's
          degree (2024–2026) at IPU, Delhi.
        </p>
        <h3 className="experience__status-title">
          Current Status – Juggling clg and freelancing
        </h3>
      </div> */}

      <Link to="/">
        <BsArrowLeft style={{ fontSize: "2rem" }} />
      </Link>

      <div className="experience__list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience__card"
            style={{ "--i": index }}
          >
            <div className="experience__card-content">
              <h3 className="experience__card-title">{exp.title}</h3>
              <a href={exp.link} target="_blank" rel="noreferrer">
                <p className="experience__card-company">{exp.company}</p>
              </a>
              <p className="experience__card-duration">{exp.duration}</p>
              <ul className="experience__card-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="experience__card-responsibility">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
