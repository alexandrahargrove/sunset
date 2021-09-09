import React from 'react';
import { Link } from "react-router-dom";
import './style/footer.css';


const Footer = () => {
        return (
        <footer>
            <div id="business-info-container">
            <div id="address-and-phone-container">
            <h1 id="footer-header">Sunset Drive-In</h1>
            <p id="address">255 Elks Lane
            <br />
            San Luis Obispo, CA 93401
            </p>
            <p id="phone-number">
            &#40;805&#41; 544-4475
            </p>
            <p id="site-links-container">
                <h3>Site Links:</h3>
                <br />
               <a href="">Showtimes</a> 
               <a href="">Information</a> 
               <a href="">Contact</a> 
            </p>
            </div>
            <div id="hours-of-operation">
                <h3>Hours Of Operation</h3>
                <br />
                Monday 7PM - 12AM
                <br />
                Tuesday 7PM - 12AM
                <br />
                Wednesday 7PM - 12AM
                <br />
                Thursday 7PM - 12AM
                <br />
                Friday 7PM - 12AM
                <br />
                Saturday 7PM - 12AM
                <br />
                Sunday 7PM - 12AM
            </div>
            <div id="social-icons-footer">
                <h3>Socials:</h3>
                <br />
                <a href="/"><img alt="instagram logo" src="/instagram.png"></img></a>
                <a href="/"><img alt="facebook logo" src="/facebook.png"></img></a>
            </div>
            <div id="footer-image">
            <img alt="sunset drive in logo" id="footer-logo" src="/sunset.png"></img>
            </div>
            </div>
            <div id="copyright">
                Copyright 2021 &copy; Sunset Drive-In Movie Theater. All Rights Reserved.
                <br />
                Website made by Alexandra Hargrove.
                <br />
                <br />
                <Link to="/admin">Admin</Link>
            </div>
        </footer>
    )
}

export default Footer;