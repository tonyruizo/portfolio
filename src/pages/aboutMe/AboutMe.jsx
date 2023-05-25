import React from 'react';
import './aboutMe.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';


function AboutMe() {
  const navigate = useNavigate();
  const backHomeBtn = () => navigate('/');


  const [isVisible, setVisible] = useState(false);
  const toggleDiv1 = () => {
    setVisible(!isVisible);

  };

  const [isVisible2, setVisible2] = useState(false);
  const toggleDiv2 = () => {
    setVisible2(!isVisible2);
  };

  const icon = isVisible ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />;
  const icon2 = isVisible2 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />;


  return (
    <div className='aboutMe-container'>
      <div className="aboutMe-heading">
        <h1>About Me</h1>
      </div>
      <div className="aboutMe-body">
        <div className="ab-display">
          <div className="ab-bio">
            <p>I have experience working with front-end frameworks, such as React, and an understanding of version control with Git. Additionally, I possess problem-solving skills and a passion for staying up-to-date with industry trends and technologies.</p><br></br><p> With a dedication to delivering high-quality work, I am eager to contribute my skills to a dynamic and collaborative team. Currently, a part-time student at
              Hillsborough Community College pursuing a Computer Programming and Analysis A.S. degree.</p>
          </div>
          <div className="ab-skills">
            <div className="ab-heading" onClick={toggleDiv1}>Skills {icon}</div>
            <div className="ab-learning-skills">
              {isVisible && <div><strong>Learning</strong><p><i>C#, Visual Basic, XML, jQuery, SQL</i></p></div>}
            </div>
            <br></br>
            <div className="ab-current-skills">
              {isVisible && <div><strong>Abilities</strong><p><i>Javascript, HTML5, CSS, SASS, React.js</i></p></div>}
            </div>
          </div>
          <div className="ab-education">
            <div className="ab-heading" onClick={toggleDiv2}>Education {icon2}</div>
            <div className="ab-degree">
              {isVisible2 && <div><strong>Computer Programming and Analysis A.S.</strong><p><a href="https://www.hccfl.edu/academics/subjects/information-technology/computer-programming-and-analysis" target='_blank'>@HCC</a><i> Present - Fall 2024</i></p></div>}
            </div>
            <br></br>
            <div className="ab-cert">
              {isVisible2 && <div><strong>Meta Front-End Developer Certification</strong><p><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/3AEQQ4DRC8ZU" target='_blank'>Certification</a><i> Offered by Meta staff</i></p></div>}
            </div>
          </div>
        </div>
        <div className="aboutMe-btn">
          <button onClick={backHomeBtn}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
