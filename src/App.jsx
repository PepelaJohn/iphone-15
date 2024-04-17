import React from "react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
