import React from 'react';
import './projectCard.css';

const ProjectCard = ({ imgSrc, title, text, codeUrl, demoUrl }) => {
  return (
    <div className='projectCard-container'>
      <img src={imgSrc} alt="project card" />
      <div className="projectCard-content">
        <div className="projectCard-heading">{title}</div>
        <div className="projectCard-text">{text}</div>
      </div>
      <div className="projectCard-btn">
        <a href={codeUrl} target="_blank">
          <button>See Code</button>
        </a>
        <a href={demoUrl} target="_blank">
          <button>See Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
