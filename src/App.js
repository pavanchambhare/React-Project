import React from 'react';

import { Footer, Blog, Possibility, Features,  Header } from './containers';
import { Cta, Navbar } from './components';

import './App.css';
import './components/navbar/navbar.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <Features />
    <Possibility />
    <Cta/>
    <Blog />
    <Footer />
  </div>
);

export default App;