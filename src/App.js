import React from "react";
import { Route } from 'react-router-dom'

// Components
import Navbar from "./components/navbar";
import Homepage from './components/homepage'
import About from './components/about'

// Styles
import "./App.css";
import './styles/navbar.css'
import './styles/homepage.css'
import './styles/about.css'

function App() {
  return (
    <div className="App">
      <Route path='/' component={ Navbar } />
      <Route exact path='/' component={ Homepage } />
      <Route exact path='/about' component= { About } />
    </div>
  );
}

export default App;
