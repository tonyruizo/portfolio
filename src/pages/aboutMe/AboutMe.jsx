import React from 'react';
import data from "./data.json";
import './aboutMe.css';
// import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {SlPlus, SlMinus} from "react-icons/sl";


function AboutMe() {
  // const navigate = useNavigate();
  // const backHomeBtn = () => navigate('/');

  const [expandedItems, setExpandedItems] = useState({});
  const toggleDiv = (id) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className='container aboutMe'>
      {data && data.length > 0 ?
        (data.map(item=> (
          <li key={item.id}>
            <div className="container">
              <div className="ab-bio">
                <div className="ab-bio-heading">
                  {item.heading}
                  <div className='ab-bio-icon' onClick={() => toggleDiv(item.id)}>
                    {expandedItems[item.id] ? <SlMinus/> : <SlPlus style={{color: 'var(--primary-color)', fontWeight: 'bolder'}}/>}
                  </div>
                </div>
                {expandedItems[item.id] && (
                  <>
                    <hr style={{height: '1px', background: 'var(--primary-color)'}}/>
                    <div className="ab-bio-info">
                        {Array.isArray(item.body) ?
                          item.body.map((detail) => (
                            <div key={detail.title}>
                              {detail.link ? (
                                <span style={{color:'var(--primary-color)'}}><a href={detail.link}>{detail.title}</a></span>)
                                : (<span style={{color:'var(--primary-color)'}}>{detail.title}</span>)
                              }
                              {detail.date && <p><i>{detail.date}</i></p>}
                              {detail.info}
                              {detail.role && <p className="detail-role">{detail.role}</p>}
                            </div>
                          ))
                          :
                          <p>{item.body}</p>
                        }
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>))
        ) : <div className='ab-no-data' style={{color: 'var(--light)'}}>No data</div>
      }
    </div>
  );
}

export default AboutMe;
