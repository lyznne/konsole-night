import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Main from './layouts/Main';
import Loading from './layouts/Loading';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 2 : 100
      );
    }, 100); 

    setTimeout(() => {
      setIsLoading(false); 
      clearInterval(progressInterval);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div>
      {isLoading && <Loading progress={loadingProgress} />}
      {isLoading ? null : ''}
      <Navbar /> 
      <Main />
    </div>
  );
}

export default App;
