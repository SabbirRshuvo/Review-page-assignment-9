import React from 'react';
import './Home.css'
import abc from './phone.jpg'
const Home = () => {
    return (
        <div className='container'>
            <div className="photo-section">
                <div className="text-section">
                    <span className='first'>Your First Phone</span>
                    <br />
                    <span className='second'>Your best phone</span>
                    <p className='paragraph'>A mobile phone is a personal communication device used to make and receive calls, send and receive messages, access the internet and perform other tasks via a wireless connection</p>
                    <button className='btn'>Live Demo</button>
                </div>
                <div className="img-section">
                    <img src={abc} alt="" />
                </div>
            </div>
            <div className="footer-section"></div>
        </div>
    );
};

export default Home;