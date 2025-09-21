// src/components/Results.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();
  const query = state?.query || '';

  return (
    <div className="text-white min-h-[60vh] max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="mb-6">You searched for: <span className="font-semibold">{query}</span></p>
      {/* TODO: call your backend / Gemini here with `query` and render results */}
    </div>
  );
}
