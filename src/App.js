import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Explore from "./Components/Explore/Explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
