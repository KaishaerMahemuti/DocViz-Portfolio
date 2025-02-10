import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container text-center mt-5">
      <h2>Contact Us</h2>
      <p>Have questions, feedback, or want to contribute? Get in touch with us!</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <h3>Email</h3>
          <p>📧 support@docviz.com</p>
        </div>
        <div className="col-md-4">
          <h3>GitHub</h3>
          <p>🔗 <a href="https://github.com/oslabs-beta/DocViz" target="_blank">GitHub Repository</a></p>
        </div>
        <div className="col-md-4">
          <h3>Contribute</h3>
          <p>🎯 Fork our repo, submit a PR, and help improve DocViz!</p>
        </div>
      </div>
    </section>
  );
}
