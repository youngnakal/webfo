import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import Earn from "./components/Earn";
import Spin from "./components/Spin";
import Friend from "./components/Friend";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/spin" element={<Spin />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
