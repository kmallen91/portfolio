import React from "react";

// Components
import Navbar from "./components/navbar";
import Homepage from './components/homepage'

// Styles
import "./App.css";
import './styles/navbar.css'
import './styles/homepage.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
