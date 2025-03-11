import React, { useState } from "react";
import "../Card/Style.scss";
import { AiFillGithub } from "react-icons/ai";
import Loader from "../Loader/Loader";

const Card = ({ heading, image, github, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="card" onClick={onClick}>
      <div className="image-section">
        {!isImageLoaded && <Loader />}
        <img
          className={`${isImageLoaded ? "loaded" : ""}`}
          src={image}
          alt=""
          onLoad={handleImageLoad}
        />
      </div>
      <div className="info">
        <h3>{heading}</h3>
        {github && (
          <a href={github} target="_blank" className="buttons" rel="noreferrer">
            <AiFillGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
