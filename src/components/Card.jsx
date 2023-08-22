import React from 'react'


const Card = ({ icon, title, description, link, linkUrl, index }) => {
  return (
    <div className="card bottom-card">
      <div className={`icon icon-${index}`}>
        <img src={icon} alt={title} />
      </div>
      <div className="contents">
        <h2>{title}</h2>
        <p className="text">
          {description} <a href={linkUrl} target="_blank" className="link">{link}</a>
        </p>
      </div>
    </div>
  );
};


export default Card;



