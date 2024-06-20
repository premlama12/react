
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import React,{ useState } from 'react';

function App() {
  const [mode, setMode]=useState('dark');
  return (
    <>
<Navbar title="myTec" mode={mode}/>
<div className="container">
{/* <TextForm heading="Enter the text you want to enter"/> */}
<About/>
</div>

    </>
  );
}

export default App;
