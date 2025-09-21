// src/App.js
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Maps from './components/maps';          // <-- import 
import Results from './components/Results';    // <-- create this file
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {                              // homepage comp
  return (
    <>
      <Hero />
      <Maps />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}
