import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./Components/Page";
import Rockets from "./Components/Rockets";
import About from "./Components/About";
import RocketDetail from "./Components/RocketDetail";
import Register from "./Components/Register";
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<Page />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:rocketId" element={<RocketDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
};

export default App;
