import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Hi my name is pavan and i make responsi website for you.',
  },
  {
    title: 'Become the tended active',
    text: 'We are team so Please Join And Grow Your idea.',
  },
  {
    title: 'Message or am nothing',
    text: 'Contact And build Responsive Website.',
  },
  {
    title: 'Really boy law county',
    text: 'where you are not meter what i help you friend',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;