import React from 'react';

export default function About() {
  return (
    <section id="about" className="container text-center mt-5">
      <h2>About DocViz</h2>
      <p>DocViz is an advanced, lightweight, and developer-friendly monitoring tool designed to simplify container observability.</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Why DocViz?</h3>
          <p>Managing multiple containers can be complex. DocViz provides an intuitive interface to track real-time statistics, making it easier to monitor performance and troubleshoot issues efficiently.</p>
        </div>
        <div className="col-md-6">
          <h3>Our Goal</h3>
          <p>We aim to bridge the gap between containerization and seamless monitoring, offering developers a structured and visually engaging way to oversee their Docker workloads.</p>
        </div>
      </div>
    </section>
  );
}
