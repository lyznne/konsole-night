import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import award from "../assets/award.svg";
import clock from "../assets/clock.svg";
<<<<<<< HEAD
=======
import canvas from "../assets/canvas.svg";

>>>>>>> 5913f7b (:tada: :tada: new)
import copy from "../assets/copy.svg";
import Card from '../components/Card';
import bottomCardDetails from "../models/DataDetails.jsx";
import copyDetails from '../models/copyDetails';
import Languages from '../components/Languages';
import Box from '../components/Box';
import CodeSnippet from '../components/CodeSnippet';

import featuresDetails from '../models/featuresDetails';



const Main = () => {


  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [copied, setCopied] = useState(false);

  const handleCopyClick = (event) => {
    const buttonIndex = event.target.classList[0].split('-')[2];
    const content = copyDetails[buttonIndex].content;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const [isCardBodyOpen, setIsCardBodyOpen] = useState([true, false, false]);

  const toggleCardBody = (index) => {
    const updatedStates = [...isCardBodyOpen];
    updatedStates[index] = !updatedStates[index];
    setIsCardBodyOpen(updatedStates);
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
            <CodeSnippet />
            <CodeSnippet />
            <CodeSnippet />
          </div>
        </div>
      </section>
      <section id="features">
<<<<<<< HEAD
        <div className="features">
=======

        <div className="features" >

>>>>>>> 5913f7b (:tada: :tada: new)
          <h1 className='h1'>
            Deliver an optimized <span className="text-gradient text-span">User Experience</span>
          </h1>
          <p className="text">There are plenty of essential features optimized to provide the best user experience.</p>
          <div className="features-content ">
            {featuresDetails.map((features, index) => (
              <Box
                key={index}
                {...features}
                index={index + 1}
              />
            ))}
          </div>
          <Languages />
        </div>
      </section>


      <section id="installation">
<<<<<<< HEAD
=======

        <img src={canvas} alt="" className="canvas" />

>>>>>>> 5913f7b (:tada: :tada: new)
        <div className="section-head">
          <h1 className='h1' >How to <span className="text-gradient  text-span">install the theme ?</span></h1>
          <p className='text'> If you encounter any issues, please <a className='link' href="#" target="_blank" >open an issue</a> on the GitHub repository.</p>
        </div>
        <div className="section-center">
          <div className="section--contents">
            <div className="card install-card">
              <div className="card-top" onClick={() => toggleCardBody(0)}>

                through visual studio code
              </div>
              <div className={`install-card-body ${isCardBodyOpen[0] ? 'open' : 'closed'}`}>
                <ul className='text'>
                  <li>open <span className='span'>visual studio code .</span></li>
                  <li>Go to the Extensions view by clicking extension icon or pressing  <span className="span-bg">Cmd+Shift+X</span> on macOS <span className='span-bg'>Ctrl+Shift+X </span></li>
                  <li>Search for <span className="span">"Konsole Night"</span> in the extensions marketplace.</li>
                  <li>Once installed, go to the <span className="span">"Preferences"</span> menu <span className="span-bg">Ctrl+</span>, or <span className="span-bg">Cmd+</span>, on macOS.</li>
                  <li>Select <span className="span">"Color Theme"</span> from the sidebar menu.</li>
                  <li>Choose <span className="span">"Konsole Night"</span> from the available themes.</li>
                </ul>
              </div>
            </div>
            <div className="card install-card">
              <div className="card-top" onClick={() => toggleCardBody(1)}>
                through visual studio marketplace
              </div>
              <div className={`install-card-body ${isCardBodyOpen[1] ? 'open' : 'closed'}`}>
                <ul className='text'>
                  <li>open <span className="span">visual studio marketplace.</span></li>
                  <li>search for <span className='span'>konsole night</span></li>
                  <li>
                    or copy link <div className="span-github">
                      <p>ext install Enoslyznne.konsole-night</p>
                      <img
                        src={copy}
                        alt="copy"
                        onClick={handleCopyClick}
                        className={`copy-button-${0} ${copied ? 'copied' : ''}`}
                      />
                    </div>
                  </li>
                  <li>Launch VS Code Quick Open <span className="span-bg"> Ctrl+P</span>, paste the link, and press enter.</li>
                </ul>
              </div>
            </div>
            <div className="card install-card">
              <div className="card-top" onClick={() => toggleCardBody(2)}>
                from github
              </div>
              <div className={`install-card-body ${isCardBodyOpen[2] ? 'open' : 'closed'}`}>
                <ul className='text'>
                  <li>
                    on <span className="span">github</span>, search for konsole night theme
                  </li>
                  <li>
                    or open
                    <div className="span-github"><p>https://github.com/lyznne/Konsole-night_Theme.git</p>
                      <img
                        src={copy}
                        alt="copy"
                        onClick={handleCopyClick}
                        className={`copy-button-${1} ${copied ? 'copied' : ''}`}
                      />
                    </div>
                  </li>
                  <li>check the readme file and <span className="span"> clone the repo</span> </li>
                  <li>open the folder you clone the repo and run </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>



      <section id="bottom">

<<<<<<< HEAD
          <div className="center flex">
            {bottomCardDetails.map((cardDetails, index) => (
              <Card
                key={index}
                {...cardDetails}
                index={index + 1}
              />
            ))}
          </div>
=======
        <div className="center flex">
          {bottomCardDetails.map((cardDetails, index) => (
            <Card
              key={index}
              {...cardDetails}
              index={index + 1}
            />
          ))}
        </div>
>>>>>>> 5913f7b (:tada: :tada: new)

      </section>
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default Main;
=======
export default Main;
>>>>>>> 5913f7b (:tada: :tada: new)
