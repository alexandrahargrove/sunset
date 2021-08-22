import React from 'react';
import { Link } from "react-router-dom";
import './style/footer.css';


const Footer = () => {
        return (
        <footer>
            <div id="business-info-container">
            <div id="address-and-phone-container">
            <h2>Sunset Drive-In</h2>
            <p id="address">255 Elks Lane
            <br />
            San Luis Obispo, CA 93401
            </p>
            <p id="phone-number">
            &#40;805&#41; 544-4475
            </p>
            <p id="social-icons-footer">
                Socials:
                <br />
                <a href="/">Instagram</a>
                <a href="/">Facebook</a>
            </p>
            <p id="site-links-container">
                Site Links:
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
            <div id="map-container">
            <iframe title="Sunset Drive-In Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.9145098463396!2d-120.67521478518489!3d35.25838256065407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf0d950792e09%3A0xcfe2ecee29186272!2sSunset%20Drive-In!5e0!3m2!1sen!2sus!4v1629482107327!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
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