import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const defaultCenter = { lat: 29.7604, lng: -95.3698 };
const containerStyle = { width: '100%', height: '80vh' };
const libraries = ['places']; // Required to use the Places API

function MyMapComponent() {
  // State for the user's search query, the list of places, and the selected place for the InfoWindow.
  const [query, setQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use a ref to store the map instance.
  const mapRef = useRef(null);

  // Load the Google Maps API script using the custom hook.
  // We'll use the environment variable to securely access the API key.
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // This function is called when the map loads.
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // This function handles the search when the user submits the form.
  const handleSearch = (event) => {
    event.preventDefault();
    
    if (!isLoaded) {
      console.log("Google Maps API is not loaded yet.");
      return;
    }

    setLoading(true);
    setPlaces([]); // Clear previous results
    setSelectedPlace(null); // Close any open info windows

    const placesService = new window.google.maps.places.PlacesService(mapRef.current);
    
    const fullQuery = `${query} in ${zipCode}`;

    const request = {
      query: fullQuery,
      fields: ['name', 'geometry', 'place_id', 'formatted_address'],
    };

    placesService.textSearch(request, (results, status) => {
      setLoading(false);
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
        // Pan the map to the first result to show the locations.
        if (results.length > 0) {
          mapRef.current.panTo(results[0].geometry.location);
        }
      } else {
        console.error('Places search failed with status:', status);
      }
    });
  };

  // Helper function to handle marker clicks and set the selected place.
  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    mapRef.current.panTo(place.geometry.location); // Pan to the selected marker
  };

  if (loadError) {
    return <div className="text-red-500 p-4">Error loading Google Maps. Please check your API key.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans antialiased">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Find Places with Gemini
        </h1>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for coffee shops, parks, restaurants..."
            className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{color: 'black'}}
          />
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter your zipcode"
            className="flex-3 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{color: 'black'}}
          />
            
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-6">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={12}
            onLoad={onMapLoad}
          >
            {places.map((place) => (
              <Marker
                key={place.place_id}
                position={place.geometry.location}
                onClick={() => handleMarkerClick(place)}
              />
            ))}

            {selectedPlace && (
              <InfoWindow
                position={selectedPlace.geometry.location}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div className="p-2 max-w-sm">
                  <h2 className="text-lg font-bold" style={{color: 'black'}}>{selectedPlace.name}</h2>
                  <p className="text-gray-700">{selectedPlace.formatted_address}</p>
                  <div className="mt-2 text-sm text-gray-600">
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <div className="w-full h-80vh flex items-center justify-center text-gray-500 text-xl">
            Loading Google Maps...
          </div>
        )}
      </div>
    </div>
  );
}

export default MyMapComponent;
