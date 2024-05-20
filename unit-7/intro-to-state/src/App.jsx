
import { useState } from 'react';

import './App.css';
import Nav from './components/nav/Nav';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import AddUser from './components/add-user/AddUser';

function App() {

  // const name = "Sam";
  const [ names, setNames ] = useState([]);



  const displayWelcome = () => {
    return(
      names.map((name, i) => {
        return(
          <Welcome  
          key={i} 
          name={name}
          names={names} // obtaining our full array of our state
          setNames={setNames} /> //passing ability to invoke our updateState
        )
      })
    )
  }

  return (
    <div className="App">
      <Nav />
      <AddUser 
      names={names}
      setNames={setNames}
      />
      {
        names.length > 0 ?
      displayWelcome() :
      <h1 style={{textAlign: "center"}}> Add a NEW User!</h1>
      }
      <Counter />
    </div>
  );
}

export default App;
