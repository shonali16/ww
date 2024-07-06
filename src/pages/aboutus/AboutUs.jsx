import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About WorkWave</h1>
      </header>
      <section className="about-us-content">
        <h2>Our Mission</h2>
        <p>
          At WorkWave, our mission is to empower businesses with the tools they need to thrive. We provide innovative software solutions that streamline operations, enhance customer satisfaction, and drive growth.
        </p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We are constantly exploring new technologies to provide cutting-edge solutions.</li>
          <li><strong>Customer Focus:</strong> Our customers' success is our top priority.</li>
          <li><strong>Integrity:</strong> We believe in doing business with honesty and transparency.</li>
          <li><strong>Teamwork:</strong> Collaboration and communication are at the heart of our company.</li>
        </ul>
        
        <h2>Meet the Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="public/img/menPlaceholder.jpeg" alt="Team Member 1" />
            <span className="name">Rushikesh Haveliwala</span>
            <span className="role">Web Developer</span>
          </div>
          <div className="team-member">
            <img src="public/img/placeholderWomen.jpg" alt="Team Member 2" />
            <span className="name">Sonali Sachdev</span>
            <span className="role">Web Developer</span>
          </div>
          <div className="team-member">
            <img src="public/img/womanPlaceholder.avif" alt="Team Member 3" />
            <span className="name">Ramandeep Kaur</span>
            <span className="role">Web Developer</span>
          </div>
        </div>
        
        <h2>Why Choose WorkWave?</h2>
        <p>
          With a track record of success and a focus on customer satisfaction, WorkWave stands out as a trusted partner for businesses looking to optimize their operations and achieve their goals.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
