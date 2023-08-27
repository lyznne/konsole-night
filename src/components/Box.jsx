import React from 'react';

const Box = ({ icon, title, description, index }) => {
  return (
    <div className="card-outline box">
      <div className="box-contents">
        <div className={`icon svg-${index}`} >
          <img src={icon} alt="" />
        </div>
        <div className="box-text">
          <h2>{title}</h2>
          <p className='text'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Box;