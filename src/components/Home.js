import React from 'react';
import './style/home.css';
import {Animated} from 'react-animated-css';


const Home = () => {
    return (
        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
        <div id="home-container">
             <img id="ticket" src="/ticket.png"></img>
        </div>
        </Animated>
    )
}

export default Home;