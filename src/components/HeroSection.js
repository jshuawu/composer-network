import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Select A Destination</h1>
      <div className="hero-btns">
        <Link to="/composers">
          <Button
            renderAs="button"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Composers
          </Button>
        </Link>
        <Link to="/store">
          <Button
            renderAs="button"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Store
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
