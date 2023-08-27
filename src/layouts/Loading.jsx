import React from 'react';

const Loading = ({ progress }) => {
  const progressBarStyle = {
    width: `${progress}%`,
  };

  return <div className="bar" style={progressBarStyle}></div>;
};

export default Loading;
