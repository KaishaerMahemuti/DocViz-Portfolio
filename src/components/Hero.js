import React from 'react';
import heroImage from '../assets/hero-image.jpg';

export default function Hero() {
  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <h1>Welcome to DocViz Portfolio</h1>
      <p>A Docker Observability Tool.</p>

      {/* Hero Image */}
      <img 
        src={heroImage} 
        alt="Docker Observability Tool"
        className="img-fluid my-4"
        style={{ maxWidth: "50%", borderRadius: "10px" }}
      />
    </div>
  );
}
