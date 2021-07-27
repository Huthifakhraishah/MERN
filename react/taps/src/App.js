import './App.css';
import React, {useState} from 'react';
import MyComponent from './components/MyComponent';
import TapsDisplay from './components/TapsDisplay';
import TapsShow from './components/TapsShow';
function App() {
  const [data,setData] = useState("");
  const newContent = (content) => {
    setData(content);
  }
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent/> 
        <TapsShow data={newContent}/>
        <TapsDisplay content={data}/>
      </header>
    </div>
  );
}

export default App;
