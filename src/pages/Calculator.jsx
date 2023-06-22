import React, { Component } from "react";
import Footer from "../components/Footer";

class BodyboardSizeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      result: "",
    };
  }

  calculateBoardLength = () => {
    const { height, weight } = this.state;
    let text = "★ INVALID INPUT ★ <br/>-- try a lower weight --";

    if (height <= 50 && weight <= 3) {
      text = "★ INVALID INPUT ★";
    } else if (height <= 130) {
      if (weight <= 25) {
        text = '★ Your Bodyboard size is 30"';
      }
    } else if (height <= 140) {
      if (weight <= 30) {
        text = '★ Your Bodyboard size is 32"';
      }
    } else if (height <= 145) {
      if (weight <= 35) {
        text = '★ Your Bodyboard size is 34"';
      }
    } else if (height <= 150) {
      if (weight <= 45) {
        text = '★ Your Bodyboard size is 36"';
      }
    } else if (height <= 153) {
      if (weight <= 50) {
        text = '★ Your Bodyboard size is 37"';
      }
    } else if (height <= 155) {
      if (weight <= 55) {
        text = '★ Your Bodyboard size is 37.5"';
      }
    } else if (height <= 156) {
      if (weight <= 58) {
        text = '★ Your Bodyboard size is 38"';
      }
    } else if (height <= 158) {
      if (weight <= 59) {
        text = '★ Your Bodyboard size is 38.5"';
      }
    } else if (height <= 162) {
      if (weight <= 60) {
        text = '★ Your Bodyboard size is 39"';
      }
    } else if (height <= 165) {
      if (weight <= 65) {
        text = '★ Your Bodyboard size is 39.5"';
      }
    } else if (height <= 167) {
      if (weight <= 72) {
        text = '★ Your Bodyboard size is 40"';
      }
    } else if (height <= 170) {
      if (weight <= 80) {
        text = '★ Your Bodyboard size is 40.5"';
      }
    } else if (height <= 173) {
      if (weight <= 85) {
        text = '★ Your Bodyboard size is 41"';
      }
    } else if (height <= 179) {
      if (weight <= 90) {
        text = '★ Your Bodyboard size is 41.5"';
      }
    } else if (height <= 183) {
      if (weight <= 95) {
        text = '★ Your Bodyboard size is 42"';
      }
    } else if (height <= 187) {
      if (weight <= 100) {
        text = '★ Your Bodyboard size is 42.5"';
      }
    } else if (height <= 190) {
      if (weight <= 105) {
        text = '★ Your Bodyboard size is 43"';
      }
    } else if (height <= 190) {
      if (weight <= 125) {
        text = '★ Your Bodyboard size is 43.5"';
      }
    } else if (height <= 195) {
      if (weight <= 130) {
        text = '★ Your Bodyboard size is 44"';
      }
    } else if (height <= 200) {
      if (weight <= 135) {
        text = '★ Your Bodyboard size is 45"';
      }
    } else if (height > 200) {
      if (weight > 130) {
        text = '★ Your Bodyboard size is 46"';
      }
    }

    this.setState({ result: text });
  };

  handleHeightChange = (e) => {
    this.setState({ height: e.target.value });
  };

  handleWeightChange = (e) => {
    this.setState({ weight: e.target.value });
  };

  render() {
    return (
      <>
        <div className="calculator">
          <h1>
            <b>BODYBOARD SIZE CALCULATOR</b>
          </h1>
          <p>
            ★
            <strong>
              {" "}
              RIDER PREFERENCE MAY VARY, THIS CALCULATOR IS ONLY A GUIDE
              <br />
              <em>For higher body weight, use a thicker bodyboard.</em>
            </strong>
            <br />
            <br />
            <br />
            <br />
          </p>
          <label htmlFor="height">RIDER HEIGHT:</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="  ENTER HEIGHT (CM)"
            value={this.state.height}
            onChange={this.handleHeightChange}
          />
          <label htmlFor="weight">RIDER WEIGHT:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="  ENTER WEIGHT (KG)"
            value={this.state.weight}
            onChange={this.handleWeightChange}
          />
          <label
            id="result"
            dangerouslySetInnerHTML={{ __html: this.state.result }}
          ></label>
          <br />
          <br />
          <button className="findYourSize" onClick={this.calculateBoardLength}>
            FIND YOUR SIZE!{" "}
          </button>
          <p>
            Power by <b>CORK BODYBOARDS</b>
            <br /> ©️ all rights reserved
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default BodyboardSizeCalculator;
