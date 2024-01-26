import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="container">
      <h2 className="heading">Welcome to the new instagram app</h2>
      <p className="subtext">Please choose an option:</p>
      <div className="buttons">
        <Link to="/register" className="button">
          Register
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
