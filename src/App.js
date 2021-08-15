import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './components/style/app.css';
import Contact from './components/Contact';
import Showtimes from './components/Showtimes';
import Information from './components/Information';


function App() {
  return (
    <Router>

    <div id ="navigation">
      <Link to="/">Home</Link>
      <span id="diamond-one">&#9830;</span>
      <Link to="/showtimes">Showtimes</Link>
      <span id="diamond-two">&#9830;</span>
      <Link to="/information">Information</Link>
      <span id="diamond-three">&#9830;</span>
      <Link to="/contact">Contact</Link>
    </div>


      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/showtimes">
        <Showtimes />
      </Route>
      <Route path="/information">
        <Information />
      </Route>


    </Router>
  );
}

export default App;
