import React from 'react';
import './linkBox.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BsPersonPlus } from 'react-icons/bs';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { VscEditorLayout } from "react-icons/vsc";
import { SlSocialTwitter } from 'react-icons/sl';


function LinkBox() {
  return (
    <div className='linkBox-container'>
      <div className="linkBoxes">
        <ul>
          <div className="linkbox">
            <li>
              <Link to='/aboutme'>
                <button>
                  <div className="link-icon"><BsInfoCircleFill /></div>
                  About Me
                  <span className="link-icon"><AiOutlineArrowRight /></span>
                </button>
              </Link>
            </li>
          </div>

          <div className="linkbox">
            <li>
              <Link to="/projects">
                <button>
                  <div className="link-icon"><VscEditorLayout /></div>
                  Projects
                  <span className="link-icon"><AiOutlineArrowRight /></span>
                </button>
              </Link>
            </li>
          </div>

          <div className="linkbox">
            <a href="https://github.com/tonyruizo" target="_blank">
              <button>
                <div className="link-icon"><BsFileEarmarkCode /></div>
                Github
                <span className="link-icon"><AiOutlineArrowRight /></span>
              </button>
            </a>
          </div>

          <div className="linkbox">
            <a href="https://twitter.com/tonyruizo?ref_src=twsrc%5Etfw" target='_blank'>
              <button>
                <div className="link-icon"><BsPersonPlus /></div>
                Follow
                <span className="link-icon"><AiOutlineArrowLeft /></span>
              </button>
            </a>
          </div>
        </ul>
      </div>
    </div >
  );
}

export default LinkBox;
