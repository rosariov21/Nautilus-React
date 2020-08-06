import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Forms from './Components/Forms';
import Articles from './Components/Articles';
import Channels from './Components/Channels'

function App() {
  return (
    <div className="App">
    
    
       <Home/>
    <Articles/>
     <Forms/>
     <Channels/>
    </div>
  );
}

export default App;
