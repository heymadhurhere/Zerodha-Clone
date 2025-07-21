import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Award 1" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Broker in the India</h1>
          <p className="mb-5">
            We are the largest broker in the India, with over 2+ million clients
            which contribute to 10% of the total market shar:.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodities</li>
                <li>Currency</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks</li>
                <li>Mutual Funds</li>
                <li>Bonds and Government Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width: "90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
