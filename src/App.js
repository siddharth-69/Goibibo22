import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import Second from './components/Second';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <headers>
        <h1><a href="/finals">Orders</a></h1>
      </headers>
      <Homepage 
      options={[
        "kolkata",
        "kerela",
        "delhi",
        "jaipur",
        "jodhpur",
        "ahmedabad",
        "agra",
        "ranchi",
        "amritsar",
        "imphal",
        "goa",
        "gandhinagar"
      ]}/>
    </div>
  );
}

export default App;
