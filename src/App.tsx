import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CoinPage from "./Components/CoinPage/CoinPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CoinPage/:id" element={<CoinPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
