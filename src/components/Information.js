import React from 'react';
import Faq from 'react-faq-component';

const faqData = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Example One Question",
            content: "Example one answer."
        },
        {
            title: "Example Two Question",
            content: "Example two answer."
        },
        {
            title: "Example Three Question",
            content: "Example three answer."
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