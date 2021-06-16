import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BlogList from "./components/BlogList"
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
        <BlogList />
        <Footer />    
    </div>
  );
}

export default App
