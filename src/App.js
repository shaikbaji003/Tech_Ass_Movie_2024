import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Pages/MainRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";
const App = () => (
  <Router>
    <Navbar />
    <MainRoutes />
  </Router>
);

export default App;
