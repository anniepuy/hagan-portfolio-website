import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Repeat for each project */}
        <div className="project">
          <img src="/Project1.png" alt="Project 1" />
          <p>Project 1 description</p>
          <Link to ="/project-1">Learn More</Link>
        </div>
        {/* Add more projects here */}
      </div>
      <button className="restricted-button">
        Access Restricted Projects
      </button>
    </section>
  );
};

export default Portfolio;
