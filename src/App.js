import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Lahore from './pages/Lahore';


import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lahore" element={<Lahore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
