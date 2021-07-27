import React,{useState} from 'react';
import './App.css';
import {Router} from '@reach/router';
import Serach from './Components/Serach';
import Errors from './Components/Errors';
import Catefory from './Components/Catefory';

function App() {
  const [currentMsg,setCurrentMsg]=useState([]);
  const add=(sm)=>{
    setCurrentMsg([...Array.from(currentMsg),sm]);
  }
  return (
    <div className="App">
      <Serach/>
      <Router>
          <Catefory path="/:cCategory/:id/"/>
          <Errors path="/error/"/>
      </Router>
    </div>
  );
}

export default App;