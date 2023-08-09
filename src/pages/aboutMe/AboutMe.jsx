import React from 'react';
import './aboutMe.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from 'react';


function AboutMe() {
  const navigate = useNavigate();
  const backHomeBtn = () => navigate('/');


  // const [isVisible, setVisible] = useState(false);
  // const toggleDiv1 = () => {
  //   setVisible(!isVisible);

  // };

  // const [isVisible2, setVisible2] = useState(false);
  // const toggleDiv2 = () => {
  //   setVisible2(!isVisible2);
  // };

  // const icon = isVisible ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />;
  // const icon2 = isVisible2 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />;


  return (
    <div className='aboutMe-container'>
      <div className="aboutMe-heading">
        <h1>About Me</h1>
      </div>
      <div className="aboutMe-body">
        <div className="ab-display">
          <div className="ab-bio">
            <p>With a solid foundation in front-end development using frameworks like React and a comprehensive grasp of Git version control, I bring valuable experience to the table. My knack for problem-solving is a driving force, complemented by an unwavering passion for staying abreast of the latest industry trends and technological advancements.
              <br />
              <br />
              In my continuous pursuit of growth, I am actively mastering C#, Visual Basic, jQuery, and SQL, which speaks to my dedication to expanding my skill set. I am currently engaged in a project that employs a skillful blend of ASP.NET, VB.NET, jQuery, Bootstrap, and SQL Server, showcasing my adaptability to diverse tech stacks.
              <br />
              <br />
              My commitment to delivering top-tier outputs is unwavering, and I'm enthusiastic about channeling my abilities into a vibrant and collaborative team environment. I'm balancing my professional journey with part-time studies at Hillsborough Community College, where I'm pursuing a Computer Programming and Analysis A.S. degree, further underlining my commitment to excellence.</p>
          </div>
          {/* <div className="ab-skills">
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
              {isVisible2 && <div><strong>Meta Front-End Developer Professional Certificate</strong><p><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/3AEQQ4DRC8ZU" target='_blank'>Certification</a><i> Offered by Meta staff</i></p></div>}
            </div>
          </div> */}
        </div>
        <div className="aboutMe-btn">
          <button onClick={backHomeBtn}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
