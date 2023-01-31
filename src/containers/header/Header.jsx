import React from 'react';
import home from '../../assets/data1.png';
import Dictaphone from './MyComponent';


import './header.css';
import MyComponent from './MyComponent';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Amazing Website With Pavan</h1>
      <p> Fastest , Responsive , Shameles </p>
      <MyComponent />
      <div className="header__img">
      <img src={ home } id="data" />
      </div>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address"   />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">

        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
     
    </div>
  </div>
);

export default Header;