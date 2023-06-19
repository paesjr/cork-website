import React from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Bodyboards() {
  return (
    <>
      <div className="bodyboards-container">
        <div className="bodyboards-column">
          <img
            className="bodyboards-img"
            alt="Timber bottom Cork Bodyboard"
            src="https://i.ibb.co/ZGkSkS5/TIMBER-BTM.jpg"
          />
          <img
            className="bodyboards-img"
            alt="All Cork Bodyboard"
            src="https://i.ibb.co/3vsmqpZ/ALL-CORK.jpg"
          />
          <img
            className="bodyboards-img"
            alt="Kid's Bodyboard"
            src="https://i.ibb.co/k55wXNZ/KIDS.jpg"
          />
          <img
            className="bodyboards-img"
            alt="DK Bodyboard"
            src="https://i.ibb.co/5v43nd4/DK.jpg"
          />
        </div>
        <div className="description-column">
          <ol className="description-list">
            <li>TIMBER BOTTOM BODYBOARD</li>
            <li>ALL CORK BODYBOARD</li>
            <li>KIDS BODYBOARD</li>
            <li>DK BODYBOARD</li>
          </ol>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Bodyboards;
