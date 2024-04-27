import React, { useState, useEffect } from 'react';
import { DiCoffeescript } from 'react-icons/di';

const codeLines = [
<<<<<<< HEAD
  'const greet = () => {',
  "  console.log('Hello, world!');",
  '};',
];

const CodeSnippet = () => {
  const [typedCode, setTypedCode] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      const timeout = setTimeout(() => {
        setTypedCode((prevTypedCode) => [...prevTypedCode, line]);
        setCurrentLine((prevLine) => prevLine + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);
=======
  `get '/hello', ->
  'Hello World'


  # Append.
  append = (location, data) ->
  path = new Pathname location
  throw new Error "Location does not exist" unless fs.existsSync(location)

  File.open path, 'a', (file) ->
      file.console.log YAML.dump data

  data`,
];

const CodeSnippet = () => {
 
>>>>>>> 5913f7b (:tada: :tada: new)

  return (
    <div className="codesnippet">
      <div className="codesnippet-top flex">
        <div className="screen-nav flex">
          <div className="navigation exit"></div>
          <div className="navigation min"></div>
          <div className="navigation max"></div>
        </div>
        <div className="lang flex">
          <DiCoffeescript className="lang-icon" />
          <p>main.coffee</p>
        </div>
      </div>
      <div className="codesnippet-contents">
        <pre className="code-container">
<<<<<<< HEAD
          <code>
            {typedCode.map((line, index) => (
              <div key={index} className="code-line">
                {line}
              </div>
            ))}
          </code>
=======
        
>>>>>>> 5913f7b (:tada: :tada: new)
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
