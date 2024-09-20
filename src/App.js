import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
    return(
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;