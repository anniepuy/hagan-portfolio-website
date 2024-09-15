import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="main-section">
            <div className="left-section">
                <h2>Hi, I'm Ann.</h2>
                <p>I'm a Data Analyst and Programmer with a passion for building intelligence solutions with intuiative user interfaces.</p>
            </div>
            <div className='right-section'>
                <img src="public/PortfolioCartoonImage.png" alt="Cartoon of Ann"/>
            </div>
        </section>
    );
};

export default Home;