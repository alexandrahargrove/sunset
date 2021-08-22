import React from 'react';
import Faq from 'react-faq-component';

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

const Information = () => {
    return (
        <div id="FAQ-Container">
        <Faq data={faqData} /> 
        </div>
    )
}

export default Information;