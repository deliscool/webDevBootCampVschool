import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BodyBlog from "./components/BlogBody/Blog"
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BodyBlog />
      <Footer />    
    </div>
  );
}

export default App
