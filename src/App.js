import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  
}from 'react-router-dom';
function App() {


  const[mode,setMode]= useState('light'); // whether darkmode is enabled or not;

  const Darkmode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }

  }

  return (
   <>
  <Router>
  <Navbar title ="TextUtils" aboutText="About" HomeText="Home" mode ={mode} Darkmode={Darkmode} />
  <div className='container my-3'>
    <Switch>
        <Route exact path ='/about'>
          
          <Aboutus mode ={mode}/>
        
        </Route>
        
        <Route exact path="/">
         
          <Textform heading="Enter your text to analyze" mode ={mode}/> 

        </Route>
    </Switch>
  </div>
  </Router>
  </>
  );
}

 


export default App;
