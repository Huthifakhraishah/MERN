import Box from './Box';
import Color from './Color';
import  { useState } from  'react';
import './App.css';

function App() {
  const [currentMsg,setCurrentMsg]=useState([]);
  const add=(sm)=>{
    setCurrentMsg([...Array.from(currentMsg),sm]);
  }
  return (
    <div className="App">
        <Color add={add}></Color>
        <Box sec={currentMsg}></Box>
    </div>
  );
}

export default App;
