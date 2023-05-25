import React from 'react';
import './projects.css';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../components/projectCard/ProjectCard';
import RateImg from '../../assets/projects-img/rate-component.png';
import LuxPageImg from '../../assets/projects-img/luxury-jewelry-landing-page.png';
import LittleLemonImg from '../../assets/projects-img/little-lemon-page.png';

function Projects() {
  const projects = [
    {
      id: '01',
      image: LittleLemonImg,
      title: 'Little Lemon Restaurant Landing Page',
      text: 'ReactJS',
      codeUrl: 'https://github.com/tonyruizo-meta-coursera/capstone-little-lemon',
      demoUrl: 'https://tonyruizo-little-lemon.netlify.app/',
    },
    {
      id: '02',
      image: LuxPageImg,
      title: 'Luxury Jewelry Landing Page',
      text: ' HTML5, CSS, JS',
      codeUrl: 'https://github.com/tonyruizo-meta-coursera/luxury-jewelry-project',
      demoUrl: 'https://tonyruizo-luxury-jewelry.netlify.app/',
    },
    {
      id: '03',
      image: RateImg,
      title: 'Interactive Rating Component',
      text: ' HTML5, CSS, JS',
      codeUrl: 'https://github.com/tonyruizo/FrontendMentor-Interactive-rate-component',
      demoUrl: 'https://interactive-rating-tonyruizo.netlify.app/',
    },

  ];

  const navigate = useNavigate();
  const backHomeBtn = () => navigate('/');
  return (
    <div className='projects-container'>
      <div className="projects-heading">
        <h1>Recent Projects</h1>
      </div>
      <div className="projects-body">
        <div className="projects-display">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imgSrc={project.image}
              title={project.title}
              text={project.text}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
        <div className="projects-body-btn">
          <button onClick={backHomeBtn}>
            Back
          </button>
          <button>
            <a href="https://github.com/tonyruizo?tab=repositories" target='_blank'>
              View More
            </a>
          </button>

        </div>

      </div>
    </div>
  );
}

export default Projects;
