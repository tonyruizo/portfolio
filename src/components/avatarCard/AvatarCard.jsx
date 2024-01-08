import React from 'react';
import Avatar from '../../assets/profile1.jpg';
import './avatarCard.css';
import { Link } from 'react-router-dom';

function AvatarCard() {
  return (
    <div className='container avatar-card'>
      <div className="avatar-img">
        <Link to='/'>
          <img src={Avatar} alt="Profile photo" />
        </Link>
      </div>
      <div className="avatar-heading">
        <h1>@tonyruizo</h1>
      </div>
      <div className="avatar-bio">
        <h3>Web Developer</h3>
      </div>
      <div className="avatar-location">
        <p>Tampa, FL</p>
      </div>
    </div>
  );
}

export default AvatarCard;
