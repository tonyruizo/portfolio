import React from 'react';
import './footer.css';
import { SlSocialTwitter } from 'react-icons/sl';
import { AiOutlineGithub } from 'react-icons/ai';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiMail } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className="footer-icons">
        <div className="icon">
          Email
          <a href="mailto:tonyruizo@pm.me"><FiMail /></a>
        </div>
        <div className="icon">
          Twitter
          <a href="https://twitter.com/tonyruizo" target="_blank"><SlSocialTwitter /></a>
        </div>
        <div className="icon">
          GitHub
          <a href="https://github.com/tonyruizo" target="_blank"> <AiOutlineGithub /></a>
        </div>
        <div className="icon">
          LinkedIn
          <a href="https://linkedin.com/in/tonyruizo" target="_blank"> <SlSocialLinkedin /></a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; {currentYear} - All Rights Reserved. Created by <a href='/'>@tonyruizo</a> </p>
      </div>
    </div>
  );
}

export default Footer;
