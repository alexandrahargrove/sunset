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
      <Link to="/showtimes">Showtimes</Link>
      <Link to="/information">Information</Link>
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
