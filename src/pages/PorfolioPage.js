import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    return(
        <section className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects">
                <div className="project">
                    <img scr="/public/Project1.png" alt="Random Forest Analysis"/>
                    <p>Random Forest Data Analysis</p>
                    <a href="/project1">Learn more</a>
                </div>
                <div className="project">
                    <img scr="/public/Project2.png" alt="Sentiment Analysis"/>
                    <p>Sentiment Analysis</p>
                    <a href="/project2">Learn more</a>
                </div>
                <div className="project">
                    <img scr="/public/Project3.png" alt="Tableau of Customer Churn"/>
                    <p>Customer Churn Tablaeu Presentation</p>
                    <a href="/project3">Learn more</a>
                </div>
                <div className="project">
                    <img scr="/public/Project4.png" alt="KMeans"/>
                    <p>KMeans Clustering Data Analysis</p>
                    <a href="/project4">Learn more</a>
                </div>
                <div className="project">
                    <img scr="/public/Project5.png" alt="Hospitality room averages"/>
                    <p>Hotel Room Rate Analysis</p>
                    <a href="/project5">Learn more</a>
                </div>
                <div className="project">
                    <img scr="/public/Project6.png" alt="Local LLM"/>
                    <p>RAG application of a local LLM</p>
                    <a href="/project6">Learn more</a>
                </div>
            </div>
        </section>
    )

};

export default PortfolioPage;