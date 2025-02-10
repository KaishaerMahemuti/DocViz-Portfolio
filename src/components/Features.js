import React from 'react';

export default function Features() {
  return (
    <section id="features" className="container text-center mt-5">
      <h2>Features</h2>
      <p>DocViz offers a powerful suite of tools designed to enhance Docker container monitoring and observability.</p>

      <div className="row mt-4">
        <div className="col-md-4 feature-card">
          <h3>Comprehensive Container Monitoring</h3>
          <p>Monitor all running and stopped containers in real time with intuitive status indicators (Green: Running, Red: Stopped).</p>
        </div>
        <div className="col-md-4 feature-card">
          <h3>Dashboard View</h3>
          <p>Get instant access to critical container metrics, including Network I/O, Memory Usage, CPU Usage, and Container ID & Name.</p>
        </div>
        <div className="col-md-4 feature-card">
          <h3>Real-Time Data Polling</h3>
          <p>Utilizing WebSockets, DocViz ensures your monitoring data is always up to date without unnecessary delays.</p>
        </div>
      </div>
    </section>
  );
}
