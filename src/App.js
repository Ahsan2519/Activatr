import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./assest/style/App.css";
import Completed from "./pages/Completed";
import { useEffect, useState } from "react";
import CompaignIdeas from "./pages/CompaignIdeas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/campaign/campaign-detail" element={<CompaignIdeas />} />
      </Routes>
    </Router>
  );
};

export default App;
