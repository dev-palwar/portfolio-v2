import "./style.scss";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Lumara jewels",
      duration: "Dec 2023 - May 2024",
      responsibilities: [
        "Translated Figma designs into a fully functional homepage using Sass",
        "Implemented a backend-driven UI.",
        "Implemented authentication mechanisms, including manual and OTP-based login.",
        "Streamlined the flow from the product details page to the cart page.",
        "Developed a comprehensive product details page, fetching data from the backend and integrating components like carousels, image galleries, and product customization options for jewelry according to their metals, diamonds, and size.",
        "Created a dynamic cart page with three subpages: cart details, address selection, and checkout, ensuring a smooth checkout process",
      ],
      link: "https://lumarajewels.com/",
    },
  ];

  return (
    <section className="experience">
      {/* Current Status Section */}
      <div className="experience__current-status">
        <p className="experience__status-text">
          After completing my internship at Lumara Jewels, I took a career break
          to focus on higher studies. <br /> I am currently pursuing a Master's
          degree (2024-2026) at IPU, Delhi.
        </p>
        <h3 className="experience__status-title">
          Current Status – Juggling clg and freelancing
        </h3>
      </div>
      {/* <Heading Heading={"Experience"} /> */}
      <div className="experience__list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience__card">
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
