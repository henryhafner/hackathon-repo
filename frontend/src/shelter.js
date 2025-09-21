import './index.css'
import React, { useState, useEffect } from "react";

const formatLink = (url) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

function ShelterResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/shelter")
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
                Shelter Resources
            </title>
            <h1 class='text-left' style={{fontSize: '28px' ,paddingLeft: '50px', display: 'flex'}}>
                <a href='App.js'>NextDoorHub</a> <span style={{position: "absolute", left: '46%'}}>Shelter</span>
            </h1>
            <hr style={{border: 'none', height: '5px', backgroundColor: '#A92CE8'}}></hr>
            <ul style={{textAlign: 'center'}}>
        {resources.map((r) => (
          <li key={r.id} style={{ margin: "0.5rem 0" }}>
            <p style={{ fontWeight: "600" }}>{r.name}</p>
            <p>{r.description}</p>
            <p>{r.phone_number}</p>
            {r.website && (
              <><a href={formatLink(r.website)} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a><hr style={{border: 'none', height: '3px', backgroundColor: '#A92CE8'}}></hr></>
            )}
          </li>
        ))}
      </ul>
        </div>
  );
}

export default ShelterResources;