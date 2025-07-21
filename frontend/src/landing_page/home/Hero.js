import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in your future</h1>
        <p>Online investment platform for everyone.</p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 signup-btn"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
