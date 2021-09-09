import React from 'react';
import Faq from 'react-faq-component';
import { Redirect } from 'react-router-dom';
import './style/information.css';

const faqData = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Do you accept credit / debit cards?",
            content: "No. We accept CASH ONLY. However, there is an ATM inside of the snack bar for your convenience."
        },
        {
            title: "What is your pet policy?",
            content: "Pets are ok! We just ask you to keep any furry companions on a leash at all times."
        },
        {
            title: "How do I hear the movie?",
            content: "Tune in to 100.7 AM on your car radio. You can also bring a portable radio if you'd like."
        },
        {
            title: "Can we sit outside our car?",
            content: "Yes. You can bring foldable chairs or sit in your truck bed."
        },
        {
            title: "How much is it to get in?",
            content: "$10.00 per adult. $4.00 per childen ages 5-11. 4 and under are free. Cash only."
        },
        {
            title: "When is the Swap Meet?",
            content: "Every Sunday starting at 5:00am for sellers, and 6:00am for buyers. We will post Saturday evening on Facebook if weather will require us to close. For Swap Meet reservations or questions ONLY please call (805)441-4911."
        },
        {
            title: "Do movies play when it's raining?",
            content: "Movies play rain or shine."
        },
        {
            title: "When should I arrive?",
            content: "The Box Office opens at 7:30pm and the first showing starts at 8:15pm."
        }
    ]
};

const styles = {
    bgColor: '#E0D9C2',
    arrowColor: 'red'
    
};

const Information = () => {
    return (
        <div id="FAQ-container">
        <Faq data={faqData} styles={styles} /> 
        <div id="map-container">
            <iframe title="Sunset Drive-In Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.9145098463396!2d-120.67521478518489!3d35.25838256065407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf0d950792e09%3A0xcfe2ecee29186272!2sSunset%20Drive-In!5e0!3m2!1sen!2sus!4v1629482107327!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
        </div>
        </div>
    )
}

export default Information;