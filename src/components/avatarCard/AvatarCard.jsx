import React from 'react';
import Avatar from '../../assets/profile1.webp';
import './avatarCard.css';
import { Link } from 'react-router-dom';

function AvatarCard() {
  return (
    <div className='container avatar-card'>
      <div className="avatar-img">
        <Link to='/'>
          <img src={Avatar} alt="Profile photo" style={{ width: '150px', height: '150px' }} rel="preload" />
        </Link>
      </div>
      <div className="avatar-heading">
        <h1>@tonyruizo</h1>
      </div>
      <div className="avatar-bio">
        <h2>Web Developer</h2>
      </div>
      <div className="avatar-location">
        <p>Tampa, FL</p>
      </div>
    </div>
  );
}

export default AvatarCard;
