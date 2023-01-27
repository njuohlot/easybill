import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = (e) =>{
    e.preventDefault();
    localStorage.removeItem('user')
    console.log('user')
  }
  return (
    <>
     <div className="hero">
      <header>
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-start">EASY</span>BILL
            </h1>
          </Link>
        </div>

        {JSON.parse(localStorage.getItem("user")) ? (
          <button onClick={handleClick}>Log-Out</button>
        ) : (
          <Link to="/">
            <button>Sign-In</button>
          </Link>
        )}
      </header>
      <div className="text">
        <h1>We Help Business Get Paid Faster</h1>
        <p>
          Online Invoicing Made Easier With{" "}
          <span className="logo-start">EASY</span>BILL
      </p>

        <Link to="/create_invoice">
          <button>Try It For Free</button>
        </Link>
      </div>
    </div>
    
    </>
   
  );
};

export default Hero;
