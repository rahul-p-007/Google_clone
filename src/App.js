import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Router>
        {/* This is work like a switch  */}
        <Routes>
          <Route path="/search" element={<SearchPage />}>
            {/* <SearchPage/> */}
          </Route>
          <Route path="/" element={<Home />}>
            {/* Home (the one with search on) */}
          </Route>
        </Routes>

        {/* Search Page (the result page) */}
      </Router>
    </div>
  );
};

export default App;
