import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import award from "../assets/award.svg";
import clock from "../assets/clock.svg";
import Card from '../components/Card';
import bottomCardDetails from "../models/DataDetails.jsx";




const Main = () => {


  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="main">
      <section id="hero " className="hero-main">
        <div className="hero ">
          <div className="hero--heading">
            <div className="hero-title">
              <h1 className="text-gradient">konsole night theme</h1>
              <div className="text-contents flex">
                <img src={award} alt="award" />
                <p className="text">The best Vs Code theme , a sleek and immersive coding experience.</p>
              </div>
            </div>
            <div className="tabs">
              <div className="btn-primary flex mode-switch">
                <div className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
                  onClick={() => handleTabClick(0)}
                >konsole theme off</div>
                <div className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >Konsole theme on</div>
              </div>
            </div>
            <a href="#installation">
              <button className="btn-primary btn-use"> use theme</button>
            </a>
            <div className="hero-bottom flex">
              <img src={clock} alt="clock" />
              <p>White theme for konsole night   : <span> coming soon ✨ </span> </p>
            </div>
          </div>
          <div className="hero--code">

          </div>
        </div>
      </section>
      <section id="features">
        <div className="features">
          <h1>
            Deliver an optimized <span className="text-gradient">User Experience</span>
          </h1>
          <p className="text">There are plenty of essential features optimized to provide the best user experience.</p>
          <div className="features-content">

          </div>
          <div className="languages">
            <h1 className="text-gradient">supported languages</h1>
          </div>
        </div>
      </section>
      <section id="installation">
        <h1>How to <span className="text-gradient">install ?</span></h1>
        <p className='text'> If you encounter any issues, please <a className='link' href="#" target="_blank" >open an issue</a> on the GitHub repository.</p>
      </section>
      <section id="bottom">
        <div className="center flex">
          <div className="center flex">
            {bottomCardDetails.map((cardDetails, index) => (
              <Card
                key={index}
                {...cardDetails}
                index={index + 1}
              />
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Main;