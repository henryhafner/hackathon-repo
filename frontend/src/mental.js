import './index.css'
import React, { useState, useEffect } from "react";

const formatLink = (url) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

function MentalResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/mental")
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div class='text-white'>
      <title>
        Mental Resources
      </title>
      <h1 className="text-center text-[28px] font-bold py-4">
        Wellness
      </h1>
      <hr style={{ border: 'none', height: '5px', backgroundColor: '#00df0f' }}></hr>
      <ul style={{ textAlign: 'center' }}>
        {resources.map((r) => (
          <li key={r.id} style={{ margin: "0.5rem 0" }}>
            <p style={{ fontWeight: "600" }}>{r.name}</p>
            <p>{r.description}</p>
            <p>{r.phone_number}</p>
            {r.website && (
              <><a href={formatLink(r.website)} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a><hr style={{ border: 'none', height: '3px', backgroundColor: '#00df0f' }}></hr></>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentalResources;