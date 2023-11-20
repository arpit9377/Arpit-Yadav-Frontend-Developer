// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./Components/Page";
import Rockets from "./Components/Rockets";
import About from "./Components/About";
import RocketDetail from "./Components/RocketDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:rocketId" element={<RocketDetail />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
};

export default App;
