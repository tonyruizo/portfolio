import React from 'react';
import './footer.css';
import { SlSocialTwitter } from 'react-icons/sl';
import { AiOutlineGithub } from 'react-icons/ai';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-icons">
        <div className="icon">
          <a href="mailto:tonyruizo@pm.me"><FiMail /></a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/tonyruizo" target="_blank"><SlSocialTwitter /></a>
        </div>
        <div className="icon">
          <a href="https://github.com/tonyruizo" target="_blank"><AiOutlineGithub /></a>
        </div>
        <div className="icon">
          <a href="https://linkedin.com/in/tonyruizo" target="_blank"><SlSocialLinkedin /></a>
        </div>
      </div>
      <div className="copyright">
        <p>By <a href='/'>Tonyruizo</a> &copy; Copyright 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
