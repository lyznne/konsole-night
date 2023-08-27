import React from 'react';
import supportedLanguages from '../models/SupportedLanguages';

const chunkArray = (array, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

const Languages = () => {
  const languagesChunks = chunkArray(supportedLanguages, 11);

  return (
    <div className="languages" id='support'>
      <h1 className="text-gradient text-span h1">supported languages</h1>
      <div className="languages-body">
        {languagesChunks.map((chunk, chunkIndex) => (
          <div className="languages-carousel" key={chunkIndex}>
            {chunk.map((language, index) => (
              <div className="language flex" key={index}>
                {language.icon}
                <p className="language-name">{language.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
