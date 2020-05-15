import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import SmurfContext from '../context';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        // console.log('Response from axios call: ', response);
        setSmurfs(response.data);
      })
      .catch((error) => console.log('Error from axios call: ', error));
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! The Blue Village!</h1>
      <SmurfContext.Provider value={smurfs}>
        <Smurfs />
      </SmurfContext.Provider>
      <SmurfForm />
    </div>
  );
};

export default App;
