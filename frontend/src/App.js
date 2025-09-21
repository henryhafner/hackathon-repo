// src/App.js
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Maps from './components/maps';          // <-- import 
import Results from './components/Results';    // <-- create this file
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Food from './food';
import Safety from './safety';
import Mental from './mental';
import Education from './education';
import Shelter from './shelter';
import MyMapComponent from './MyMapComponent';

function Home() {                              // homepage comp
  return (
    <>
      <Hero />
      <MyMapComponent />
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
        <Route path="/food" element={<Food />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/Wellness" element={<Mental />} />
        <Route path="/education" element={<Education />} />
        <Route path="/housing" element={<Shelter />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
