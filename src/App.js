import React from "react";
import { Route } from 'react-router-dom'

// Components
import Navbar from "./components/navbar";
import Homepage from './components/homepage'
import About from './components/about'
import Projects from './components/projects'
import ContactForm from "./components/contact";

// Styles
import "./App.css";
import './styles/navbar.css'
import './styles/homepage.css'
import './styles/about.css'
import './styles/projects.css'
import './styles/contact.css'

function App() {
  return (
    <div className="App">
      <Route path='/' component={ Navbar } />
      <Route exact path='/' component={ Homepage } />
      <Route exact path='/about' component= { About } />
      <Route exact path='/projects' component= { Projects } />
      <Route exact path='/contact' component= { ContactForm } />
    </div>
  );
}

export default App;
