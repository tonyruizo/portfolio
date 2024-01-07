import React from 'react';
import './aboutMe.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {SlPlus, SlMinus} from "react-icons/sl";


function AboutMe() {
  const navigate = useNavigate();
  const backHomeBtn = () => navigate('/');


  const [isExpand, setExpand] = useState(false);
  const toggleDiv = () => {
    setExpand(!isExpand);
  };

  const icon = isExpand ? <SlMinus/> : <SlPlus style={{color: 'var(--primary-color)', fontWeight: 'bolder'}}/>;


  return (
    <div className='aboutMe-container'>

      <div className="aboutMe-body">
        <div className="ab-bio">
          <div className="ab-bio-heading">
            Summary
            <div className='ab-bio-icon' onClick={toggleDiv}>
              {icon}
            </div>
          </div>
          {isExpand && (
            <>
              <hr style={{height: '1px', background: 'var(--primary-color)'}}/>
              <div className="ab-bio-info">
              <p>
                  Results-driven web developer with a strong work ethic and a proven track record of contributing to
                  startup software companies. Specializing in front-end web development, I excel in adapting to
                  organizational growth, taking ownership of projects, and collaborating with colleagues to drive
                  innovation.
                </p>
              </div>
            </>
          )}
        </div>

        {/*  <button onClick={backHomeBtn}>Back to Home</button>*/}
      </div>
    </div>
  );
};

export default AboutMe;
