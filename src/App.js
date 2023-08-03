import React from "react";
import Navbar from "./Component/Navbar";
import Home from './Component/Home';
import Experts from "./Component/Experts";
import NewsLetter from './Component/NewsLetter';
import Menu from './Component/Menu';
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Experts/>
       <NewsLetter/> 
       <Menu/>
       <Footer/>
    </div>
  );
}

export default App;
