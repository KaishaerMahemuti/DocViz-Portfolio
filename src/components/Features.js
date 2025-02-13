import React from 'react';

export default function Features() {
  return (
    <section id="features" className="container text-center mt-5">
      <h2>Features</h2>
      <p>
        DocViz offers a powerful suite of tools designed to enhance Docker container
        monitoring and observability.
      </p>

      {/* 
        1) align-items-stretch on the row makes all columns stretch to the same height
        2) Each column has px-3 for horizontal spacing
        3) Each card has h-100 so it fills the entire column height
      */}
      <div className="row mt-4 mx-n3 align-items-stretch">
        <div className="col-md-4 px-3">
          <div className="feature-card h-100">
            <h3>Comprehensive Container Monitoring</h3>
            <p>
              Monitor all running and stopped containers in real time with intuitive
              status indicators (Green: Running, Red: Stopped). This is a longer text
              to show how it affects card height.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-3">
          <div className="feature-card h-100">
            <h3>Dashboard View</h3>
            <p>
              Get instant access to critical container metrics, including Network I/O,
              Memory Usage, CPU Usage, and Container ID &amp; Name.
            </p>
          </div>
        </div>
        <div className="col-md-4 px-3">
          <div className="feature-card h-100">
            <h3>Real-Time Data Polling</h3>
            <p>
              Utilizing WebSockets, DocViz ensures your monitoring data is always up
              to date without unnecessary delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
