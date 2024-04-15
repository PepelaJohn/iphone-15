import React from "react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

function App() {


  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Highlights />
    </React.Fragment>
  );
}

export default App;
