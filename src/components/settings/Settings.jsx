import React, {useState} from 'react'
import './settings.css'
import {BsMoonStarsFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';


function Settings() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
  
    }
  return (
    <div className='settings-container'>
        <div className='displayModeBtn' onClick={toggleDarkMode}>{isDarkMode ? <BsFillSunFill/> :<BsMoonStarsFill/> }</div>
    </div>
  )
}

export default Settings