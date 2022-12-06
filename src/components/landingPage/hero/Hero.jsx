import React from 'react';
import { HeroStyles, HeroMessageStyles } from './HeroStyles';
import heroBg from '../../../assets/svg/heroBg.svg';
function Hero() {
  return (
    <HeroStyles>
      <img src={heroBg} alt="" className="heroImgage" />
      <HeroMessageStyles>
        <div className="textMessage">
          <p className="bold">Fast, Reliable & Quality Dispatch Service</p>
          <p className="tiny">Send. Track. Receive.</p>
        </div>
        <div className="heroTextButton">
          <button className="customer">Register as a Customer</button>
          <button className="rider">Register as a Rider</button>
        </div>
      </HeroMessageStyles>
    </HeroStyles>
  );
}

export default Hero;
