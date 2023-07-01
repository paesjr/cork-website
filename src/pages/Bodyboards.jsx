import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

function Bodyboards() {
  return (
    <>
      <h2 className="bodyboard-header">
        Click on image to reveal bodyboard description
      </h2>
      <div className="bodyboards-container">
        <div className="bodyboards-column">
          <div className="bodyboard-card">
            <div className="bodyboard-inner">
              <div className="front">
                <img
                  className="bodyboards-img"
                  alt="Timber bottom Cork Bodyboard"
                  src="https://i.ibb.co/ZGkSkS5/TIMBER-BTM.jpg"
                />
              </div>
              <div className="back">
                <div className="bodyboard-description">
                  <h2>Timber Bottom Bodyboard</h2>
                  <br />
                  <p>
                    A faster ride crafted with cork, upcycled foam, timber
                    stringers, plant fibers, and a timber bottom, this bodyboard
                    combines speed and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyboard-card">
            <div className="bodyboard-inner">
              <div className="front">
                <img
                  className="bodyboards-img"
                  alt="All Cork Bodyboard"
                  src="https://i.ibb.co/3vsmqpZ/ALL-CORK.jpg"
                />
              </div>
              <div className="back">
                <div className="bodyboard-description">
                  <h2>All Cork Bodyboard</h2>
                  <br />
                  <p>
                    A more flexible bodyboard crafted with cork, upcycled foam,
                    timber stringers, and plant fibers, this bodyboard combines
                    control and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyboard-card">
            <div className="bodyboard-inner">
              <div className="front">
                <img
                  className="bodyboards-img"
                  alt="Kid's Bodyboard"
                  src="https://i.ibb.co/k55wXNZ/KIDS.jpg"
                />
              </div>
              <div className="back">
                <div className="bodyboard-description">
                  <h2>Kid's Bodyboard</h2>
                  <br />
                  <p>
                    A fun, lightweight, durable, and perfectly sized for small
                    kids (from Toddlers to Preschoolers), it's their ticket to
                    exciting and sustainable wave-riding experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyboard-card">
            <div className="bodyboard-inner">
              <div className="front">
                <img
                  className="bodyboards-img"
                  alt="DK Bodyboard"
                  src="https://i.ibb.co/5v43nd4/DK.jpg"
                />
              </div>
              <div className="back">
                <div className="bodyboard-description">
                  <h2>DK Bodyboard</h2>
                  <br />
                  <p>
                    A sustainable option with a shape designed for drop knee
                    riding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <br />
      <Footer />
    </>
  );
}

export default Bodyboards;
