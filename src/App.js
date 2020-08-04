import React from 'react';
import {Route,Link} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import Second from './components/Second';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <Link to="/finals">
        <h1>Orders</h1>      
      </Link>
      <Homepage />
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
