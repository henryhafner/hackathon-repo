// src/components/Hero.jsx

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const defaultCenter = { lat: 29.7604, lng: -95.3698 };
const containerStyle = { width: '100%', height: '80vh' };
const libraries = ['places'];

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/results', { state: { query } }); // pass the query along
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ex: food assistance, Zipcode: 77099"
          className="mb-4 px-4 py-2 rounded text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-[#00df0f] text-black font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Search
        </button>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Here To Help You With Zero Charge!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
