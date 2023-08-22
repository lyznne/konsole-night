import React from 'react';
import polygon from "../assets/polygon.svg";
import smile from "../assets/smile.svg";


const Footer = () => {
  return (
    <footer>
        <h1>konsole night</h1>
        <div className="footer-items flex">
            <p>2023 konsole night . all rights reserved</p>
            <div className="user flex">
                <img src={polygon} alt="" className="polygon" />
                <p>made by -</p><a href="#">enos(lyznne)</a>
                <img src={smile} alt="smile" />
            </div>
            <div className="top flex">
            <img src={polygon} alt="" className="polygon" />
                <p>scroll top</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;