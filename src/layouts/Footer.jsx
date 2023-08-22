import React from 'react';
import polygon from "../assets/polygon.svg";
import smile from "../assets/smile.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer ">
        <a href="" target='_blank'><h1 className='title'>konsole night</h1>
        </a>
        <div className="footer-items flex">
          <div className="rights flex">
            <span className='text copy'>&copy;</span>
            <p className='text'> 2023 konsole night . all rights reserved</p>
          </div>
          <div className="user flex">
            <img src={polygon} alt="" className="polygon" />
            <p className='text'>  made by -</p><a href="#" target='_blank' className='text link-user'>enos(lyznne)</a>
            <img src={smile} alt="smile" />
          </div>
          <div className="top flex">
            <img src={polygon} alt="" className="polygon" />
            <p className='text'>scroll top</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;