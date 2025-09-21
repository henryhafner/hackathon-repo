import React, { useEffect, useState } from "react"

function Testing() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/safety").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])
    if (!backendData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {backendData.map((safe, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                    <h2>{safe.name}</h2>
                    <p><strong>Description:</strong> {safe.description}</p>
                    <p><strong>Website:</strong> {safe.website}</p>
                    <p><strong>Phone:</strong> {safe.phone_number}</p>
                </div>
            ))}
        </div>
    );
}

export default Testing