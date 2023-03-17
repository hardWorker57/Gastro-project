import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import Header from "./Header";
import About from "./pages/About";
import Home from "./Home";
import gsap from "../node_modules/gsap";

function App() {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Header />
        <Footer />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path="*" element={NotFoundPage} /> */}
      </Routes>
    </div>
  );
}

export default App;
