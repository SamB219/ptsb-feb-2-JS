
import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import MovieIndex from './components/movie/MovieIndex';

function App() {

  const [ sessionToken, setSessionToken] = useState('');

  // console.log(sessionToken);
  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);

  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);


  return (
    <div className="App">
      <Routes>
          <Route 
            path='/'
            element={<Auth updateToken={updateToken}/>}
          />

          <Route 
            path='/movie'
            element={<MovieIndex token={sessionToken}/>}
            />
      </Routes>

    </div>
  );
}

export default App;
