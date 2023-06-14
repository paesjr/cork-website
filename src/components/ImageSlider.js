import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import logo from "../images/logo.png";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const slideInterval = 5000; // duration (in milliseconds) between slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [length, slideInterval]);

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h6 className="credit">
          Laurent Lopez riding a Cork bodyboard <br></br>Photos by Jeanpi
          Guillotin
        </h6>
      </div>
      <div className="text-overlay">
        <h2>
          {slides.description}“Inspired by a passion for bodyboarding and a
          commitment to preserving our natural environment, we are dedicated to
          creating products that are crafted from eco-friendly materials,
          minimizing their impact on the planet.”
        </h2>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <img
                  src={slide.image}
                  alt="riding cork bodyboard"
                  className="image"
                />
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
