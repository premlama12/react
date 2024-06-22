
import './App.css';
import Alort from './components/Alort';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React,{ useState } from 'react';

function App() {
  const [mode, setMode]=useState('light');
  const [alort,setAlort]=useState(null)


  const showAlort = (message,type) => {
    setAlort({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlort(null)
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlort('dark mode has been turned on','successfully')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlort('light mode has been enabled','successfully')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="myTec" mode={mode} toggleMode={toggleMode}/>
    <Alort alort={alort}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/TextForm">
          <TextForm heading="Enter the text you want to enter" mode={mode} showAlort={showAlort}/>
          </Route>
    </Switch>
            
    </div>
    </Router>
    </>
  );
}

export default App;
