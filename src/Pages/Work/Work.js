import React, { useEffect, useState } from "react";
import "../Work/Style.scss";
import Card from "../../Components/Card/Card";
// import Data from "../../Assets/project-data.json";
import { LoadMore } from "../../Components/Loader/Loader";
import { motion } from "framer-motion";
import { animations } from "../../Styles/Animations/Animations";
import { SkillsIcons } from "../../utils/icons";
import ProjectSidebar from "../../Components/sidebar/Sidebar";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [display, setDisplay] = useState("none");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_PROJECTS_DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.slice(0, 5));
        setAllProjects(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const handleShowAllProjects = () => {
    fetch(process.env.REACT_APP_PROJECTS_DATA_URL)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setShowAllProjects(true);
        setDisplay(null);
      })
      .catch((error) => console.error("Error fetching full projects:", error));
  };

  const filterProjectsBySkill = (skill) => {
    setSelectedSkill(skill);
    if (!skill) {
      setProjects(allProjects.slice(0, 5));
    } else {
      setProjects(
        allProjects.filter((project) => project.tech_Stack.includes(skill))
      );
    }
  };

  const openSidebar = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 199, behavior: "smooth" });
    }, 200);
    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="work">
      <Link to="/" style={{ marginBottom: "3rem" }}>
        <BsArrowLeft style={{ fontSize: "2rem" }} />
      </Link>
      <motion.div
        className="icons"
        {...animations.bar}
        style={{
          fontSize: "3rem",
          justifyContent: "center",
          marginBottom: "2rem",
          display: display,
        }}
      >
        {SkillsIcons.map(
          ({ Component, color, skill, name, display }, index) =>
            display && (
              <Component
                key={index}
                title={name}
                style={{
                  color,
                  cursor: "pointer",
                  borderBottom:
                    selectedSkill === skill ? "3px solid white" : "none",
                  borderRadius: "5px",
                  paddingBottom: "10px",
                }}
                onClick={() => filterProjectsBySkill(skill)}
              />
            )
        )}
      </motion.div>

      <div className="cards">
        {projects.map((project) => (
          <Card
            key={project.id}
            heading={project.heading}
            image={project.img}
            github={project.github}
            onClick={() => openSidebar(project)}
          />
        ))}
        {!showAllProjects && projects.length >= 5 && (
          <LoadMore
            image={projects[5]?.img} // Safe optional chaining
            heading="Show More"
            onClick={handleShowAllProjects}
          />
        )}
      </div>

      <ProjectSidebar
        isOpen={isSidebarOpen}
        project={selectedProject}
        onClose={closeSidebar}
      />
    </div>
  );
};

export default Work;
