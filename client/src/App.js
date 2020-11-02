import React from 'react';
import { Router, Link } from "@reach/router";
import Display from "./Components/Display";
import Registration from "./Components/Registration"
import One from "./Components/One";
import New from "./Components/New";
import Update from "./Components/Update";
import Visualizer from "./AlgoVisualizer/Visualizer";
import './App.css';


function App() {
  return (
    <div>
      <div className="App">
      <div>
          <h1 style={{margin:"40px 0px 0px 0px"}}>Algorithm Visualizer</h1>
          <h5 style={{margin:"20px 0px 0px 0px", color:"grey"}}>A full stack Javascript Project using Mongoose, 
            </h5>
            <h5 style={{margin:"0px 0px 0px 0px", color:"grey"}}>Express, React, and Node to explore Algorithms. </h5>
            <p style={{margin:"5px 0px 0px 0px", color:"grey"}}>By Petra Franklin and Tash Elijah Dutton</p><br></br>
        </div>
        <Router>
          <Visualizer path="/"/>
          <Registration path="/new"/>
          <Display path="/algos/"/>
          <New path="/algos/:id/newAlgo"/>
          <Update path="/algos/:id/:aid/update"/>
          <One path="/algos/:id/:aid"/>
        </Router>
        <header className="text-center" style={{margin:"4% 0% 20% 0%", height:"75px", width:"100%"}}>
          <Link to="/">Visualizer</Link> |&nbsp;
          <Link to="/algos/">Our Algo Collection</Link>  |&nbsp;
          <Link to="/algos/5f2445a4784acd0598b11ece/newAlgo">Add an Algo</Link> |&nbsp;
          <Link to="/pathfinder">Playground</Link> |&nbsp;       
          <Link to="/one/">Random Algo</Link> |&nbsp;
          <Link to="/new">Login</Link><br></br>
        </header><br></br>
      </div>
    </div>
  );
}

export default App;
